import React, { useEffect } from 'react';
import { GetProp, Select, Table, TableProps } from 'antd';
import {
  ExpandableConfig,
  FilterValue,
  SorterResult,
  TableRowSelection,
} from 'antd/es/table/interface';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './index.module.scss';
import { render, unmountComponentAtNode } from 'react-dom';

export type ColumnsType<T> = TableProps<T>['columns'];
export type TablePaginationConfig = Exclude<
  GetProp<TableProps, 'pagination'>,
  boolean
>;

export interface TableDefaultValuePaginate {
  defaultPageSize: number;
  showSizeChanger: boolean;
  pageSizeOptions?: Array<string>;
  showQuickJumper?: boolean;
}

export interface IChangeTable {
  page: number;
  pageSize: number;
  sorter?: SorterResult<Record<string, any>>[];
  filters?: Record<string, FilterValue | null>;
}

interface ITableGlobalProps extends TableProps<Record<string, any>> {
  total?: number;
  columns: ColumnsType<any>;
  rowSelection?: TableRowSelection<any>;
  expandable?: ExpandableConfig<any>;
  onChangeTable?: (value: IChangeTable) => void;
  scrollX?: number;
  subtractHeight?: number;
  showQuickJumper?: boolean;
  localeString?: string; // description page
}

export const TABLE_DEFAULT_VALUE = {
  // defaultPageSize: 10,
  showSizeChanger: true,
  hideOnSinglePage: true,
  pageSizeOptions: ['5', '10', '15', '20'],
  showQuickJumper: true,
};

function TableGlobal({
  rowKey = 'id',
  total,
  columns,
  rowSelection,
  expandable,
  onChangeTable,
  scrollX = 1000,
  subtractHeight,
  className,
  showQuickJumper = false,
  localeString = 'page',
  ...props
}: ITableGlobalProps) {
  const { height } = useWindowDimensions();

  const renderPagination = {
    ...TABLE_DEFAULT_VALUE,
    // total: total ?? 0,
    showQuickJumper: true,
    locale: { items_per_page: localeString },
  };

  useEffect(() => {
    const footerTable = document.querySelector(
      '.ant-pagination-options-quick-jumper',
    );

    if (footerTable) {
      footerTable.innerHTML = ``;
      const select = document.createElement('div');
      footerTable.appendChild(select);

      const SelectComponent = (
        <div className='flex items-center gap-4'>
          <h1>Hiển thị:</h1>
          <Select
            showSearch
            placeholder='Chọn máy chủ'
            defaultValue={'Tất cả'}
            optionFilterProp='children'
            options={[
              {
                value: '0',
                label: 'Tất cả',
              },
              {
                value: '1',
                label: 'Theo máy chủ',
              },
            ]}
          />
        </div>
      );

      render(SelectComponent, select);

      return () => {
        unmountComponentAtNode(select);
        footerTable.removeChild(select);
      };
    }
  }, []);

  return (
    <Table
      showSorterTooltip={false}
      className={`table-global ${className}`}
      rowKey={rowKey}
      size='small'
      columns={columns}
      rowSelection={
        rowSelection
          ? { ...rowSelection, fixed: 'left', columnWidth: 50 }
          : undefined
      }
      expandable={{
        columnWidth: 80,
        ...expandable,
      }}
      // onChange={(page, filters, sorter) => {
      //   onChangeTable?.({
      //     page: page?.current ?? 1,
      //     pageSize: page?.pageSize ?? renderPagination?.defaultPageSize,
      //     filters: filters,
      //     sorter: Array.isArray(sorter) ? sorter : [sorter],
      //   });
      // }}
      pagination={renderPagination}
      scroll={{
        scrollToFirstRowOnChange: true,
        x: scrollX,
        y: subtractHeight ? height - subtractHeight : undefined,
      }}
      {...props}
    />
  );
}

export default React.memo(TableGlobal);
