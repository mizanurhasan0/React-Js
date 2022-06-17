import React from "react";
import { Link } from "react-router-dom";

export const Details = () => {
  return (
    <div>
      {/* Card Box... */}
      <div className="cardBox">
        <div className="card">
          <div>
            <div className="numbers">1,032</div>
            <div className="cardName">Daily Views</div>
          </div>
          <div className="iconBox">
            <i className="fa fa-eye"></i>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">82</div>
            <div className="cardName">Sales</div>
          </div>
          <div className="iconBox">
            <i className="fa fa-shopping-cart"></i>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">208</div>
            <div className="cardName">Commenta</div>
          </div>
          <div className="iconBox">
            <i className="fa fa-comment"></i>
          </div>
        </div>

        <div className="card">
          <div>
            <div className="numbers">$835235</div>
            <div className="cardName">Earning</div>
          </div>
          <div className="iconBox">
            <i className="fa fa-dollar"></i>
          </div>
        </div>
      </div>

      {/* Details */}

      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>Recent Orders</h2>
            <Link to="/" className="btn">
              View All
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Payment</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Star Refrigerator</td>
                <td>$1200</td>
                <td>paid</td>
                <td>
                  <span className="status delivered">Delivered</span>
                </td>
              </tr>
              <tr>
                <td>Star Refrigerator</td>
                <td>$1200</td>
                <td>paid</td>
                <td>
                  <span className="status inprogress">in Progress</span>
                </td>
              </tr>
              <tr>
                <td>HP Laptop</td>
                <td>$1200</td>
                <td>paid</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>Star Refrigerator</td>
                <td>$1200</td>
                <td>paid</td>
                <td>
                  <span className="status return">Return</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="recentCustomers">
          <div className="cardHeader">
            <h2>Recent Customer</h2>
          </div>
          <table>
            <tbody>
              <tr>
                <td width="60px">
                  <div className="imgBx">
                    <img src={require("../Images/logo.png")} />
                  </div>
                </td>
                <td>
                  <h4>
                    David <br />
                    <span>Italy</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div className="imgBx">
                    <img src={require("../Images/logo.png")} />
                  </div>
                </td>
                <td>
                  <h4>
                    Hasan <br />
                    <span>Bangladesh</span>
                  </h4>
                </td>
              </tr>

              <tr>
                <td width="60px">
                  <div className="imgBx">
                    <img src={require("../Images/logo.png")} />
                  </div>
                </td>
                <td>
                  <h4>
                    Khan <br />
                    <span>Pakistan</span>
                  </h4>
                </td>
              </tr>
              <tr>
                <td width="60px">
                  <div className="imgBx">
                    <img src={require("../Images/logo.png")} />
                  </div>
                </td>
                <td>
                  <h4>
                    David <br />
                    <span>Italy</span>
                  </h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
