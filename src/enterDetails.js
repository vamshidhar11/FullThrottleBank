import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CustomizedSlider from './slider';
import Output from './displayOutput';
const useStyles = makeStyles(theme => ({
  root: {
    width: 504 + theme.spacing(3) * 2,
    padding: theme.spacing(3),
    color: '#fff',
    backgroundColor: 'rgba(209, 0, 0, 0)'
  },
  margin: {
    height: theme.spacing(3)
  },
  typography: {
    fontFamily: 'Montserrat',
    marginBottom: 20,
    fontSize: '2rem'
  }
}));
const marks = [
  { value: 1000 },
  { value: 1500 },
  { value: 2000 },
  { value: 2500 },
  { value: 3000 },
  { value: 3500 },
  { value: 4000 },
  { value: 4500 }
];

const marks2 = [{ value: 13 }];
export default function EnterDetails(props) {
  const classes = useStyles();
  const [principal, setPrincipal] = React.useState(0);
  const [tenure, setTenure] = React.useState(0);
  const [interestRate, setInterest] = React.useState(0);
  const [monthlyPayment, setMonthlyPayment] = React.useState({ amount: 0 });
  const [data, setData] = React.useState();
  React.useEffect(() => {
    if (principal !== 0 && tenure !== 0) {
      fetch(
        `https://ftl-frontend-test.herokuapp.com/interest?amount=${principal}&numMonths=${tenure}`
      )
        .then(response => response.json())
        .then(d => {
          setInterest(d.interestRate);
          setMonthlyPayment(d.monthlyPayment);
          setData(d);
        });
    }
  }, [principal, tenure]);
  React.useEffect(() => {
    const { getHistory } = props;
    getHistory(data);
  }, [interestRate, monthlyPayment, props, data]);

  function capturePrincipal(principal) {
    setPrincipal(principal);
  }

  function captureLoanTenure(tenure) {
    setTenure(tenure);
  }

  return (
    <div className="container">
      <div className="input">
        <Paper className={classes.root}>
          <Typography className={classes.typography} gutterBottom>
            Principal <span>$ {principal}</span>
          </Typography>
          <CustomizedSlider
            defaultValue={2000}
            marks={marks}
            step={100}
            min={500}
            max={5000}
            onInputChange={capturePrincipal}
          />
          <Typography className={classes.typography} gutterBottom>
            Loan Tenure (in months) <span>{tenure} months</span>
          </Typography>
          <CustomizedSlider
            defaultValue={12}
            marks={marks2}
            min={6}
            max={20}
            onInputChange={captureLoanTenure}
          />
          {/* <div className={classes.margin} /> */}
        </Paper>
      </div>

      <Output
        title="interest rate"
        className="interest"
        numericOutput={interestRate}
      />
      <Output
        title="monthly payment"
        className="installment"
        numericOutput={monthlyPayment.amount}
        currency={monthlyPayment.currency}
      />
    </div>
  );
}
