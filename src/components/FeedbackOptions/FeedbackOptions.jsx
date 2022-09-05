import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Button = styled.button`
    margin-right: 5px;
    margin-left: 5px;
    background-color: lightgreen;
    min-width: 100px;
    min-height: 30px;
    text-align: center;
    border-radius: 2px;
    border: 0;
`;

const FeedbackOptions = ({ buttons, onClickFeedback }) => {
    return (
        <div>
            {buttons.map((item, id) => (
                <Button
                    key={id}
                    type="button"
                    name={item}
                    onClick={e => onClickFeedback(e.currentTarget.name)}
                >
                    {item[0].toUpperCase() + item.slice(1)}
                </Button>
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;