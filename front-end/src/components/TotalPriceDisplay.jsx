import PropTypes from 'prop-types';
import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

function TotalPriceDisplay({ totalPrice, testId }) {
  return (
    <Box alignSelf="end" p="5">
      <Heading
        size="md"
        borderRadius="5px"
        background="Highlight"
        p="3"
      >
        Total: R$&nbsp;
        <span
          data-testid={ testId }
        >
          {parseFloat(totalPrice)
            .toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </span>
      </Heading>
    </Box>
  );
}

TotalPriceDisplay.propTypes = {
  totalPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  testId: PropTypes.string.isRequired,
};

export default TotalPriceDisplay;
