import { useState } from 'react';
import { Box, Flex, Text, Button, Stack, FormControl } from '@chakra-ui/react';
import { FcHome } from 'react-icons/fc';
import { BsCurrencyDollar } from 'react-icons/bs';
import FormInputGroup from './FormInputGroup';

const MortgageCalculator = ({
  listingPrice,
  mortgageRateInfo,
  downPaymentPercentage,
}) => {
  const [downPayment, setDownPayment] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanDuration, setLoanDuration] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateLoanAmount = () => {
    setLoanAmount(listingPrice - downPayment);
    return loanAmount;
  };

  const calculateMonthlyPayment = () => {
    const interestToDecimal = (percent) => {
      return percent / 12 / 100;
    };
    const yearsToMonths = (years) => {
      return years * 12;
    };
    setMonthlyPayment(
      interestToDecimal(interestRate * loanAmount) /
        (1 -
          Math.pow(
            1 + interestToDecimal(interestRate),
            -yearsToMonths(loanDuration)
          ))
    );

    return monthlyPayment;
  };

  return (
    <Flex
      style={{
        maxWidth: 500,
        margin: '1rem auto',
        flexDirection: 'column',
        padding: '1rem',
      }}
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        marginBottom="5"
        style={{
          margin: '1rem auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FcHome style={{ marginRight: '1rem' }} /> Calculate Mortgage
      </Text>
      <FormControl onSubmit={(e) => e.preventDefault()}>
        <Stack direction="column">
          <FormInputGroup
            text="Home Value"
            icon={<BsCurrencyDollar />}
            value={listingPrice}
            readOnly={true}
          />
          <FormInputGroup
            text="Down Payment"
            icon={<BsCurrencyDollar />}
            onKeyUp={calculateLoanAmount}
            value={downPayment}
            onInput={(e) => setDownPayment(e.target.value)}
          />
          <FormInputGroup
            text="Loan Amount"
            icon={<BsCurrencyDollar />}
            readOnly={true}
            value={loanAmount}
          />
          <FormInputGroup
            text="Mortgage Rate %"
            value={interestRate}
            onInput={(e) => setInterestRate(e.target.value)}
          />
          <FormInputGroup
            text="Loan Duration (years)"
            value={loanDuration}
            onInput={(e) => setLoanDuration(e.target.value)}
          />

          <Flex>
            <Box bg="#00A0DC" w="100%" p={4} color="white" margin="1rem">
              Monthly Payment: $ {parseFloat(monthlyPayment.toFixed(2))}
            </Box>
          </Flex>

          <Button
            type="submit"
            colorScheme="linkedin"
            onClick={calculateMonthlyPayment}
          >
            Calculate
          </Button>
        </Stack>
      </FormControl>
    </Flex>
  );
};

export default MortgageCalculator;
