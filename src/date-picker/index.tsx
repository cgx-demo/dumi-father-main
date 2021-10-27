import React, { forwardRef, Ref, useImperativeHandle, useState } from 'react';
import { DatePicker, ConfigProvider } from 'antd';
import 'moment/locale/zh-cn';
import zhCN from 'antd/es/date-picker/locale/zh_CN';
import enUS from 'antd/es/date-picker/locale/en_US';
import moment from 'moment';
import './index.css';

export interface SelectTimeProps {
  startDate: string;
  endDate: string;
  name: string | undefined;
}

interface DatePcikersProps {
  labelText?: string;
  name?: string;
  handleChange: (date: SelectTimeProps) => void;
  [key: string]: any;
}

type Props = DatePcikersProps;

interface RefObject {
  changeLanguage: () => void;
}

const { RangePicker } = DatePicker;

const AntdPickers = forwardRef((props: Props, ref: Ref<RefObject>) => {
  const [local, setLocal] = useState(zhCN);
  const { labelText, name, handleChange, ...resetProps } = props;

  useImperativeHandle(ref, () => ({
    changeLanguage,
  }));

  const changeDate = (values: any, dateStrings: string[]) => {
    // const selectDate = {
    //   startDate: moment(dateStrings[0]).valueOf() || 0,
    //   endDate: moment(`${dateStrings[1]} 23:59:59:999`).valueOf() || 0,
    //   name: props.name
    // }
    const selectDate = {
      startDate: dateStrings[0],
      endDate: dateStrings[1],
      name: name,
    };
    handleChange(selectDate);
  };

  const disabledDate = (current: any) => {
    return current && current >= moment();
  };

  const changeLanguage = () => {
    setLocal(local === zhCN ? enUS : zhCN);
    // moment.locale('zh-cn');
  };

  return (
    <ConfigProvider
      getPopupContainer={(node) => {
        if (node) {
          return node.parentNode as HTMLElement;
        }
        return document.body;
      }}
    >
      <span>{labelText ? labelText + ' : ' : ''}</span>
      <RangePicker
        locale={local}
        onChange={changeDate}
        disabledDate={disabledDate}
        {...resetProps}
      />
    </ConfigProvider>
  );
});

export default AntdPickers;
