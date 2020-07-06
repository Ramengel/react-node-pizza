import React, { useState } from 'react';
import { connect } from 'react-redux'
import {
    searchPizza
} from '../../actions'

const Search = ({searchPizza}: any) => {
    const [value, setValue] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        searchPizza(value);
    }

    const handleChange = (event: React.FormEvent<HTMLInputElement>) =>{
        setValue(event.currentTarget.value);
    }

    return (
        <div className="search-block">
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <div className="col-sm-12">
                        <input type="text" className="form-control" onChange={handleChange} value={value}/>
                    </div>
                </div>
                <button className="btn btn-primary">
                    поиск
                </button>
            </form>
        </div>
    );
}

const mapDispatchToProps = {
    searchPizza
}

export default connect(null, mapDispatchToProps)(Search);