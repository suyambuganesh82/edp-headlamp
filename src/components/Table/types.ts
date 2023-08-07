import { TableCellProps } from '@material-ui/core';
import React from 'react';
import { ValueOf } from '../../types/global';
import { SORT_ORDERS } from './constants';

export interface TableProps<DataType = unknown> {
    isLoading: boolean;
    error?: unknown;
    data: DataType[];
    columns: readonly TableColumn<DataType>[];
    upperColumns?: readonly TableColumn<DataType>[];
    defaultSortBy?: string;
    defaultSortOrder?: ValueOf<typeof SORT_ORDERS>;
    emptyListComponent?: React.ReactElement;
    handleRowClick?: (event: React.MouseEvent<HTMLTableRowElement>, row: DataType) => void;
    handleSelectRowClick?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        row: DataType
    ) => void;
    handleSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selected?: string[];
    searchFunction?: (row: DataType) => boolean;
    isSelected?: (row: DataType) => boolean;
    filterFunction?: ((...args: any[]) => boolean) | null;
    showPagination?: boolean;
    reflectInURL?: boolean;
    initialPage?: number;
    rowsPerPage?: number;
}

export interface TableColumn<DataType> {
    id: any;
    label: string;
    columnSortableValuePath?: string | string[];
    render: (data?: DataType) => React.ReactElement | string | number;
    show?: boolean;
    customizable?: boolean;
    textAlign?: TableCellProps['align'];
    width?: string;
    colSpan?: number;
}