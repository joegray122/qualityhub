import React from 'react';
import PropTypes from 'prop-types';
import './widgetL.css';

export default function widgetL() {
    function Button({ type }) {
        return (
            <button className={`widgetLButton ${type}`} type="button">
                {type}
            </button>
        );
    }
    Button.propTypes = {
        type: PropTypes.string.isRequired,
    };
    return (
        <div className="widgetL">
            <h3 className="widgetLTitle">Latest test runs</h3>
            <table className="widgetLTable">
                <tbody>
                    <tr className="widgetLTr">
                        <th className="widgetLTh">Tool</th>
                        <th className="widgetLTh">Date</th>
                        <th className="widgetLTh">Branch</th>
                        <th className="widgetLTh">Status</th>
                    </tr>
                    <tr className="widgetLTr">
                        <td className="widgetLTool">
                            <span className="widgetLName">Cypress</span>
                        </td>
                        <td className="widgetLDate">1 Apr 2021</td>
                        <td className="widgetLBranch">master</td>
                        <td className="widgetLStatus">
                            <Button type="Pending" />
                        </td>
                    </tr>
                    <tr className="widgetLTr">
                        <td className="widgetLTool">
                            <span className="widgetLName">k6</span>
                        </td>
                        <td className="widgetLDate">31 Mar 2022</td>
                        <td className="widgetLBranch">master</td>
                        <td className="widgetLStatus">
                            <Button type="Failed" />
                        </td>
                    </tr>
                    <tr className="widgetLTr">
                        <td className="widgetLTool">
                            <span className="widgetLName">Cypress</span>
                        </td>
                        <td className="widgetLDate">31 Apr 2022</td>
                        <td className="widgetLBranch">master</td>
                        <td className="widgetLStatus">
                            <Button type="Passed" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
