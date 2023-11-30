import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";
import { addCashAction, getCashAction } from "./store/cashReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };
  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>{cash}</div>
      <div className={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
        <button onClick={() => getCash(Number(prompt()))}>GET CASH</button>
        <button onClick={() => addCustomer(prompt())}>ADD CUSTOMER</button>
        <button onClick={() => getCash(Number(prompt()))}>
          REMOVE CUSTOMER
        </button>
      </div>
      <div>
        {customers.length > 0 ? (
          <div>
            {customers.map((customer) => (
              <div
                onClick={() => removeCustomer(customer)}
                style={{
                  fontSize: "2rem",
                  marginTop: 5,
                  marginLeft: "900px",
                  border: "1px solid black",
                  padding: "10px",
                  width: "100px",
                }}
              >
                {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ fontSize: "2rem", marginTop: "20px" }}>
            Клиентов не существует
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
