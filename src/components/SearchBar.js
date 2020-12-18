import React from 'react';

class searchBar extends React.Component{
    state = {
        term: ""
    };
    // 3. constructor
    // constructor(props){
    //     super(props);
    //     this.onFormSubmit.bind(this);
    // }
    // 2. (e)=>this.onFormSubmit
     onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.term);
     }
    render(){
        return(
            <div className="ui segment">
                    {/* 1.this.onFormSubmit.bind(this) */}
                <form onSubmit={this.onFormSubmit}>
                    <div className="ui form">
                        <div className="field">
                            <label>image search</label>
                            
                             <input value={this.state.term} type="text" onChange={(e) => this.setState({term: e.target.value})}/>  {/*without any pratesis for onchangebutton just for references */}

                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default searchBar;