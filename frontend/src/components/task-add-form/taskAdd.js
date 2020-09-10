import React from 'react';
//import useStyles from './'

 const TaskAdd = () => {
     
   // const classes = useStyles();
    let text;


    const onValueChange = (e) => {
        text=e.target.value;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(text);
    }

  
    return(
        <div className="bottom-panel">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Имя исполнителя</label>
                    <input 
                    type="text"
                    className="form-control"
                    onChange={onValueChange}
                    value={text}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Текст задачи</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <select className="custom-select" id="validationCustom04" required onChange={onValueChange}>
                    <option >Приоритет</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                <input className= "btn btn-primary" type="submit" defaultValue="Отправить"/>
            </form>
    </div>
    )
}
export default TaskAdd;
