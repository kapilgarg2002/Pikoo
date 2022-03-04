// export default function DietPlanner() {
//   return(
//     <>
//      <h1 className='DietPlanner'>Plan your diet with us!</h1>;
//      
//      </>
//   );
// }

import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Footer from '../Footer';
import './DietPlanner.css';

class DietPlanner extends Component{
constructor(props){
  super(props);
  this.state = {activeTab: 0};

}
toggleCategories() {

  if(this.state.activeTab === 0){
    return(
      <div className='Diet2'>
      <h2 className='Diet'>Breakfast</h2>
      <p >VEG: Poha with veggies and a glass of fresh orange juice</p>
      <p>NON-VEG: Multigrain chicken salad sandwich</p>
      <h2 className='Diet'>Lunch</h2>
      <p>Brown rice, rasam and cabbage stir-fry</p>
      <p>OR</p>
      <p>Jeera Rice and Lentil Dal Curry</p>
      <h2 className='Diet'>Snack</h2>
      <p>Low-glycemic fruits, like apples</p>
      <p>OR</p>
      <p>Homemade Chakli</p>
      <h2 className='Diet'>Dinner</h2>
      <p>Wheat dosa with roasted chana dal chutney</p>
      <p>OR</p>
      <p>Chapati with carrot methi sabzi</p>
      <h3 className='Diet'>Dietary Guidelines For Women With PCOS</h3>
      <ul>
        <li>Avoid processed and junk food.</li>
        <li>Eat 1-2 servings of fruits per day.</li>
        <li>Do not exceed more than 3-5 cups od green tea daily.</li>
        <li>Incorporate exercise into daily routine.</li>
        <li>Focus on obtaining sufficient sleep.</li>
      </ul>
      </div>
    )
  } 
  else if(this.state.activeTab === 1) {
    return (
      <div className='Diet3'>
      <h2 className='Diet'>Breakfast</h2>
      <p>Vegetable oats or dalia</p>
      <p>OR</p>
      <p>Red rice adai with aviyal</p>
      <h2 className='Diet'>Lunch</h2>
      <p>Brown rice, beetroot poriyal, dal and curd</p>
      <p>OR</p>
      <p>Whole wheat pasta with vegetables</p>
      <h2 className='Diet'>Snack</h2>
      <p>Roasted Chana</p>
      <p>OR</p>
      <p>Millet cookies</p>
      <h2 className='Diet'>Dinner</h2>
      <p>Chapatis or rotis with vegetable kurma and salad</p>
      <p>OR</p>
      <p>Methi thepla with pickle and chutney</p>
      <h3 className='Diet'>Dietary Guidelines For Women With PCOS</h3>
      <ul>
        <li>Avoid processed and junk food.</li>
        <li>Eat 1-2 servings of fruits per day.</li>
        <li>Do not exceed more than 3-5 cups od green tea daily.</li>
        <li>Incorporate exercise into daily routine.</li>
        <li>Focus on obtaining sufficient sleep.</li>
      </ul></div>
    )
  } 
  else if(this.state.activeTab === 2) {
    return (
      <div className='Diet4'>
      <h2 className='Diet'>Breakfast</h2>
      <p>Ragi Rava Dosa with mint chutney</p>
      <p>OR</p>
      <p>Ragi Porridge</p>
      <h2 className='Diet'>Lunch</h2>
      <p>VEG: Brown rice pulao with raita</p>
      <p>NON-VEG: Appam with chicken stew</p>
      <h2 className='Diet'>Snack</h2>
      <p>Whole Wheat bread with almond/ peanut butter</p>
      <p>OR</p>
      <p>Whole-grain crackers with peanut butter</p>
      <h2 className='Diet'>Dinner</h2>
      <p>VEG: Besan chilla with vegetables</p>
      <p>NON-VEG: Grilled fish with avocado salad</p>
      <h3 className='Diet'>Dietary Guidelines For Women With PCOS</h3>
      <ul>
        <li>Avoid processed and junk food.</li>
        <li>Eat 1-2 servings of fruits per day.</li>
        <li>Do not exceed more than 3-5 cups od green tea daily.</li>
        <li>Incorporate exercise into daily routine.</li>
        <li>Focus on obtaining sufficient sleep.</li>
      </ul></div>
    )
  } 
  else if(this.state.activeTab === 3) {
    return (
      <div className='Diet5'>
      <h2 className='Diet'>Breakfast</h2>
      <p>VEG: Vegetable Upma</p>
      <p>NON-VEG: Whole wheat bread and egg white omelette with beggies</p>
      <h2 className='Diet'>Lunch</h2>
      <p>Brown rice, sprouts curry, rasam and curd</p>
      <p>OR</p>
      <p>Oats, vegetable and brown rice khichdi</p>
      <h2 className='Diet'>Snack</h2>
      <p>Roasted Foxnuts (Makhana)</p>
      <p>OR</p>
      <p>Carrot sticks and hummus</p>
      <h2 className='Diet'>Dinner</h2>
      <p>Chapati or rotis with chana and green salad</p>
      <p>OR</p>
      <p>Chapati with green peas masala</p>
      <h3 className='Diet'>Dietary Guidelines For Women With PCOS</h3>
      <ul>
        <li>Avoid processed and junk food.</li>
        <li>Eat 1-2 servings of fruits per day.</li>
        <li>Do not exceed more than 3-5 cups od green tea daily.</li>
        <li>Incorporate exercise into daily routine.</li>
        <li>Focus on obtaining sufficient sleep.</li>
      </ul></div>
    )
  }
  else if(this.state.activeTab === 4) {
    return (
      <div className='Diet6'>
      <h2 className='Diet'>Breakfast</h2>
      <p>Brown rice idlis with cononut chutney</p>
      <p>OR</p>
      <p>Soya Khaman Dhokla</p>
      <h2 className='Diet'>Lunch</h2>
      <p>Daliya khichdi with vegetables and curd</p>
      <p>OR</p>
      <p>Tomato rice, beetroot salad and curd</p>
      <h2 className='Diet'>Snack</h2>
      <p>A handful of peanuts or walnuts</p>
      <p>Masala peanuts</p>
      <h2 className='Diet'>Dinner</h2>
      <p>VEG: Rotis with a bowl of sprouts</p>
      <p>NON-VEG: Grilled, roasted or homemade tandoori chicken with salad</p>
      <h3 className='Diet'>Dietary Guidelines For Women With PCOS</h3>
      <ul>
        <li>Avoid processed and junk food.</li>
        <li>Eat 1-2 servings of fruits per day.</li>
        <li>Do not exceed more than 3-5 cups od green tea daily.</li>
        <li>Incorporate exercise into daily routine.</li>
        <li>Focus on obtaining sufficient sleep.</li>
      </ul></div>
    )
  }
  else if(this.state.activeTab === 5) {
    return (
      <div className='Diet7'>
      <h2 className='Diet'>Breakfast</h2>
      <p>Brocolli and gobi parantha</p>
      <p>OR</p>
      <p>Onion and tomato Uttapam</p>
      <h2 className='Diet'>Lunch</h2>
      <p>VEG: Brown rice, stir-fry spinach, moong sprouts and curd</p>
      <p>NON-VEG: Brown rice with fish curry and mixed sprouts subzi</p>
      <h2 className='Diet'>Snack</h2>
      <p>Banana or any other fresh seasonal fruit</p>
      <p>OR</p>
      <p>Baked sweet potato fries</p>
      <h2 className='Diet'>Dinner</h2>
      <p>VEG: Chapatis or rotis with low-fat paneer curry and salad</p>
      <p>NON-VEG: Chapati with egg curry</p>
      <h3 className='Diet'>Dietary Guidelines For Women With PCOS</h3>
      <ul>
        <li>Avoid processed and junk food.</li>
        <li>Eat 1-2 servings of fruits per day.</li>
        <li>Do not exceed more than 3-5 cups od green tea daily.</li>
        <li>Incorporate exercise into daily routine.</li>
        <li>Focus on obtaining sufficient sleep.</li>
      </ul></div>
    )
  }
  else if(this.state.activeTab === 6) {
    return (
      <div className='Diet8'>
      <h2 className='Diet'>Breakfast</h2>
      <p>Ragi banana pancakes</p>
      <p>OR</p>
      <p>Quinoa Upma</p>
      <h2 className='Diet'>Lunch</h2>
      <p>VEG: Quinoa fried rice with vegetables, cashews and sesame seed</p>
      <p>NON-VEG: Chicken pulao with raita</p>
      <h2 className='Diet'>Snack</h2>
      <p>Baked begetable cutlets OR Sweet potato tikkis</p>
      <p>OR</p>
      <p>Banana or any other fresh seasonal fruit</p>
      <h2 className='Diet'>Dinner</h2>
      <p>Bajra, moong and peas khichdi</p>
      <p>OR</p>
      <p>Chapati with whole masoor dal and bhindi sabji</p>
      <h3 className='Diet'>Dietary Guidelines For Women With PCOS</h3>
      <ul>
        <li>Avoid processed and junk food.</li>
        <li>Eat 1-2 servings of fruits per day.</li>
        <li>Do not exceed more than 3-5 cups od green tea daily.</li>
        <li>Incorporate exercise into daily routine.</li>
        <li>Focus on obtaining sufficient sleep.</li>
      </ul></div>
    )
  }

}

  render(){
    return(
      <>
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>Day 1</Tab>
          <Tab>Day 2</Tab>
          <Tab>Day 3</Tab>
          <Tab>Day 4</Tab>
          <Tab>Day 5</Tab>
          <Tab>Day 6</Tab>
          <Tab>Day 7</Tab>
        </Tabs>
        <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
      <Footer></Footer>
      </>
    )
  }
}

export default DietPlanner;