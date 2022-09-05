import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Tag = styled.p`
    color: black;
    font-weight: 500;
    margin: 10px
`;

const Statistics = ({ good, neutral, bad, total, percentage }) => {
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>
                <Tag>There is no feedback</Tag>
            </div>
        )
    } else {
        return (
            <div>
                <Tag> Good: {good}</Tag>
                <Tag> Neutral: {neutral}</Tag>
                <Tag> Bad: {bad}</Tag>
                <Tag> Total: {total}</Tag>
                <Tag> Positive feedback: {percentage}%</Tag>
            </div>
        );
    };
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default Statistics;