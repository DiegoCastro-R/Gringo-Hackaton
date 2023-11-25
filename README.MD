# Minimal Config for Truffle and Ganache


# Como usar:

		make
> Use o comando make para criar as images e subir os containers e os serviços do truffel e ganache.

		make up
> Use make up para subir os containers.

		make down
> Use make down para para os containers.

		make clean
> Use make clean para limpar as images do projeto.

		make fclean
> Use make fclean para limpar tudo com relação ao projeto incluindo os volumes com banco de dados e arquivos criados.

# Manipular contas com Metamask
> Após subir é possivel ver a chave privada de até 10 contas basta acessar o log do container ganache usando:

		docker logs ganache

ref para configurar conta metamask: https://www.geeksforgeeks.org/how-to-set-up-ganche-with-metamask/

# Ambiente de desenvolvimento de Smart Contract
> Para acessar o ambiente de desenvolvimento de contratos basta usar o seguinte comando:
		
		docker exec -it truffle bash

ref: https://trufflesuite.com/docs/truffle/quickstart/