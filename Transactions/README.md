# Transactions

[Reference]

[ethereum_evm_illustrated](
https://takenobu-hs.github.io/downloads/ethereum_evm_illustrated.pdf)


트랜젝션에는 

Contract Creation과 Message Call로 크게 두가지 종류가 있다.


![Transactions](assets/transactions.png)



## Contract Creation

컨트렉트가 생성될 때는,

Transaction 내에 bytecode

컨트렉트계정이 생성되고 account state에 code와 storage와의 매핑이 된다.

![contract_creation](assets/contract_creation.png)

## Message Call

address N의 컨트렉트 계정에 데이터를 CRUD하는 트랜젝션을 
t에서 t+1으로 했을 때,
storage가 해당 데이터가 갱신된다.

![message_call](assets/message_call.png)


## Transaction Structure

transation에는 

nonce

gasPrice

gasLimit

to

v, r, s

init or data

![Transation Structure](assets/transaction_structure.png)
