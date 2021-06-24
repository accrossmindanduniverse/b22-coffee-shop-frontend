import React from 'react'
import { connect } from 'react-redux'
import { finalTransaction } from '../../redux/actions/cart'

const Transaction = (props) => {
  console.log(props)
  return (
    <div>
      <button className='confirm-pay-btn font-bold text-white text-2xl w-full h-full'>Confirm And Pay</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  items: state.items
})

const mapDispatchToProps = { finalTransaction }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(Transaction)
