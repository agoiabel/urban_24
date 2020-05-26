import React from 'react';
import Loader from '../Loader';
import Button from '../Button';
import styles from './Table.module.scss';
import { withRouter } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from "react-redux";
import {get, multipleActionExecutor} from './Table.action';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdSearch} from 'react-icons/md';

const Table = props => {
    
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [searchvalue, setSearchValue] = React.useState('');
    const {status, message, values} = useSelector(state => state.TableReducer);
    
    /** Make http request to the backend */
    React.useEffect(() => {
        setIsLoading(!isLoading);
        dispatch(get({
            url: props.url
        }));
    }, []);

    /** Update setData when request arrives */
    React.useEffect(() => {
        if (values != undefined) {
            setIsLoading(!isLoading);
            setData(values);
        }

        if (message !== null) {
            addToast(message, {
                appearance: 'success',
                autoDismiss: true,
            });
        }

    }, [message]);

    const selected = row => {
        let newData = data.map(data_row => {
            if (data_row._id === row._id) {
                data_row['is_active'] = (data_row.is_active == undefined) ? true : !data_row.is_active; 
            }
            return data_row;
        });
        setData(newData);
    }

    /**
     * Redirect to the show page
     * 
     * @param  row 
     * @return
     */
    const redirectToShow = row => {
        props.history.push(`${props.show_url.url}/${row[props.show_url.key]}`);
    }

    /** Display table */
    const tableList = () => {
        const filteredData = data.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(searchvalue)
            );
        });

        if (filteredData.length) {
            return filteredData.map(row => {

                let icon = <MdCheckBoxOutlineBlank  />

                if (row.is_active) {
                    icon = <MdCheckBox />
                }

                return (
                    <tr key={row._id} className={styles.tr}>
                        <td className={styles.td} onClick={() => selected(row)}>{icon} </td>
                    
                        {props.columns.map(col => {
                                return (
                                    <td key={col.key} className={styles.td}>
                                        {row[col.key]}
                                    </td>
                                )
                            }
                        )}

                        <td className={styles.td}><span onClick={() => redirectToShow(row)}>OPEN</span></td>
                    </tr>
                )
            });
        }

        let container = (
            <tr>
                <td colSpan={props.columns.length + 1} className={styles.center}>No Records Found.</td>
            </tr>
        )

        if (isLoading) {
            container = (
                <tr>
                    <td colSpan={props.columns.length + 1} className={styles.center}>
                        <Loader />
                    </td>
                </tr>
            )
        }

        return (
            <React.Fragment>
                {container}
            </React.Fragment>
        )
    }

    const actionExecutor = action => {
        const selectRows = {
            data: data.filter(row => row.is_active).map(row => row._id)
        };

        dispatch(multipleActionExecutor({
            url: action.url,
            data: selectRows
        }));
    }

    /** Display actions only when selected */
    let makeSelection = () => {
        let makeDecision;

        if (data.find(row => row.is_active) != undefined) {
            makeDecision = props.actions.map(action => {
                return (
                    <span key={action.key} className={styles.m_action}>
                        <Button type={'btn__primary__outline'} size={'btn__medium'} btnStyle={{ marginBottom: 0 }} onClick={() => actionExecutor(action)}>{action.name}</Button>
                    </span>
                )
            })
        }
        
        return (
            <React.Fragment>
                {makeDecision}
            </React.Fragment>
        )
    }

    const handleSelect = event => {
        let selected = event.target.value;
        let option = props.filters.find(function (el) {
            return el.value.toString() === selected.toString();
        });

        try {
            const {key, value} = option;

            let newData = [];
            for (var j=0; j < values.length; j++) {
                if (values[j][key] === value) {
                    newData.push(values[j]);
                }
            }
            setData(newData);
        } catch (err) {
            setData(values);
        }
    }

    /** Return view */
    return (
        <React.Fragment>
            <div className={styles.table_actions}>
                <div className={styles.search_action}>
                    <select onChange={e => handleSelect(e)} className={styles.select_input} >
                        <option key={"default"} value={"default"}>{"Default"}</option>
                        {props.filters.map(filter => <option key={filter.value} value={filter.value}>{filter.label}</option>)}
                    </select>
                    <input value={searchvalue} onChange={(e) => setSearchValue(e.target.value)} className={styles.input} placeholder="Search" />
                    <div className={styles.search_icon}>
                        <MdSearch color="#fff" size={25} />
                    </div>
                </div>
                <div className={styles.button_actions}>
                    <div className={styles.export_button}>
                        <Button type={'btn__primary__outline'} btnStyle={{ marginBottom: 0 }} size={'btn__medium'}>
                            <ReactHTMLTableToExcel
                                id="test-table-xls-button"
                                className={`download-table-xls-button ${styles.download_xls}`}
                                table="table-to-xls"
                                filename="users"
                                sheet="users"
                                buttonText="EXPORT CSV"
                            />
                        </Button>
                    </div>
                    { makeSelection() }
                </div>
            </div>
 
            <table className={`${styles.table} ${styles.table_bordered} ${styles.table_striped}`} id="table-to-xls">
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                        <th></th>
                        {props.columns.map((column, index) => <th key={index} className={styles.th}>{column.title}</th>)}
                        <th className={styles.th}>Action </th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    { tableList() }
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default withRouter(Table);