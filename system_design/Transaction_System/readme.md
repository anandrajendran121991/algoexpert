# Transaction Processor

# Requirements

## Functional

1. User should be able to deposit to his account
   1. how many accounts a user can be associated with?
2. User should be able to withdraw from his account
   1. error handling for insufficient funds
3. Transfers between accounts

## Non functional

1. User base - 10 million users
2. Region - North america
3. Availability - HA - 99.999
4. No of the request per second (QPS)
5. High throughput and low latency

## Low level high

Objects - User, Account, Transaction, Audit

const user = new Map()
id, fname, lname, account_id, created_date_time

const account = new Map()
account_id, user_id, balance, created_date_time

const transaction = new Map()
id, from, to, amount, created_date_time

const audit = new Map()
id, object_name, prev, curr, created_date_time

