import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css"

const DateInput = ({selectedDate, onChange, disabled, disabledStyle}) => {

    // const [disabledStyle, setDisabledStyle] = useState({
    //     color: "grey"
    // }) 

    return (
        <DatePicker 
        selected={selectedDate}
        onChange={onChange}
        dateFormat="YYYY/MM"
        showMonthYearPicker
        className="date-picker"
        disabled={disabled}  // to disable toDate when isCurrentJob 
        style={disabled ? disabledStyle : {}}
        /> 
    )
}

DateInput.propTypes = {
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    disabledStyle: PropTypes.object
};

export default DateInput; 
