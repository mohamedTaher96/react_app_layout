import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import { keys, get, values } from "lodash"
import "./style.css";
import swal from 'sweetalert';
import { withTranslation } from 'react-i18next';

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    if (record[dataIndex]?.props?.edit) {
      if(record[dataIndex]?.props?.edit=="check"){

      }else{
        setEditing(!editing);
        form.setFieldsValue({
          [dataIndex]: record[dataIndex],
        });
      }
    }else{
      swal("Not Editable!", "this value is calculated and not editable", "error")
    }
  };

  const save = async () => {
    try {
      const recordValue = await form.validateFields();
      const cellProps = get(record, keys(recordValue)[0])?.props
      const value = values(recordValue)[0]
      toggleEdit();
      if (value && typeof (value) === "string") {
        handleSave(cellProps, value);
      }
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `the value is required.`,
          },
        ]}
      >
        <Input type="number" ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: props?.dataSource,
      columns: props?.columns
    }
  }
  handleSave = (item, value) => {
    this.props.HandleEdit(item, value)
  };

  render() {
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    let { dataSource, columns } = this.state
    columns = columns.map((col) => {
      if (!col?.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col?.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        {/* <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add a row
        </Button> */}
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          scroll={{
            scrollToFirstRowOnChange: true,
            x: true,
            y:500
          }}
          pagination={false}
        />
      </div>
    );
  }
}

export default withTranslation()(EditableTable)