import axios from "axios";
import React, { useContext, useEffect } from "react";
import { GlobalState } from "../../../GlobalState";
import { Link } from "react-router-dom";

export const OrderHistory = () => {
  const state = useContext(GlobalState);
  const [history, setHistory] = state.UserApi.history;
  const [isAdmin] = state.UserApi.isAdmin;
  const [token] = state.token;

  useEffect(() => {
    if (token) {
      if (isAdmin) {
        const getAdminHistory = async () => {
          const res = await axios.get("/payment", {
            headers: { Authorization: token },
          });
          setHistory(res.data);
          console.log(res.data);
        };
        getAdminHistory();
      } else {
        const getHistory = async () => {
          const res = await axios.get("/user/history", {
            headers: { Authorization: token },
          });
          setHistory(res.data);
          console.log(res.data);
        };
        getHistory();
      }
    }
  }, [token, setHistory, isAdmin]);

  if (history.length === 0) return <div>Empty History</div>;
  return (
    <div className="history-page">
      <h2>History</h2>

      <h4>You have {history.length} ordered</h4>

      <table>
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Date of Purchased</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {history.map((items) => (
            <tr key={items._id}>
              <td>{items.paymentID}</td>
              <td>{new Date(items.createdAt).toLocaleDateString()}</td>
              <td>
                <Link to={`/history/${items._id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
