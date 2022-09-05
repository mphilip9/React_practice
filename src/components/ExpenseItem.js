import './ExpenseItem.css'

//React components MUST be named with a capital letter otherwise react won't detect that it is a custom component. Lowercase elements are built-in components
function ExpenseItem(props) {


  return (
    <div className="expense-item">
      <div>{props.date.toString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>

  )
}

export default ExpenseItem;