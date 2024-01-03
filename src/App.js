import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className="basic">
          <input type="text" placeholder={'new iPhone 15 pro'}/>
          <input type="datetime-local"/>
        </div>
        <div className="description">
          <input type="text" placeholder={'description'}/>
        </div>
        <button type='submit'>Add New Transaction</button>
      </form>

      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'> Paycheck</div>
            <div className='description'> From Work</div>
          </div>
          <div className='right'>
            <div className='price green'> + $2000</div>
            <div className='datetime'> 2024-01-01 08:30</div>
          </div>
        </div>
      </div>

      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'> PS5</div>
            <div className='description'> Purchased for Spiderman game</div>
          </div>
          <div className='right'>
            <div className='price red'> - $1000</div>
            <div className='datetime'> 2024-01-01 15:30</div>
          </div>
        </div>
      </div>

      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'> Amazon Prime</div>
            <div className='description'> Monthly Subscription</div>
          </div>
          <div className='right'>
            <div className='price red'> - $10</div>
            <div className='datetime'> 2024-01-01 17:00</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
