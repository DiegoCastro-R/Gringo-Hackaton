const Titulo = artifacts.require("Titulo");
const CheckPermission = artifacts.require("CheckPermission");

contract('Titulo', (accounts) => {
	let ownerInstanceCheckPermission;
	let ownerInstanceTitulo;
	before(async () => {
		ownerInstanceCheckPermission = await CheckPermission.deployed();
		ownerInstanceTitulo = await Titulo.deployed();
		await ownerInstanceCheckPermission.addPermission(accounts[5], {id: 10, hasPermission: true});
	})

	it('Test mint token', async () => {
		await ownerInstanceTitulo.mint(accounts[0], 45000);
		
		const balance = await ownerInstanceTitulo.balanceOf(accounts[0]);
		const supply = await ownerInstanceTitulo.totalSupply();

		assert.equal(balance, 45000, "valor em conta nao condiz");
		assert.equal(supply, 45000, "valor total de tokens nao condiz");
	});
	it('Test burn token', async () => {
		await ownerInstanceTitulo.burn(accounts[0], 15000);
		
		const balance = await ownerInstanceTitulo.balanceOf(accounts[0]);
		const supply = await ownerInstanceTitulo.totalSupply();

		assert.equal(balance, 30000, "valor em conta nao condiz");
		assert.equal(supply, 30000, "valor total de tokens nao condiz");
	})
	it('Test transfer tokens units for 5 account', async () => {
		await ownerInstanceTitulo.transfer(accounts[5], 1000);

		const balanceAccount5 = await ownerInstanceTitulo.balanceOf(accounts[5]);
		const balanceOwner = await ownerInstanceTitulo.balanceOf(accounts[0]);
		const supply = await ownerInstanceTitulo.totalSupply();

		assert.equal(balanceAccount5, 1000, "valor em conta 5 nao condiz");
		assert.equal(balanceOwner, 29000, "valor em conta 0 nao condiz");
		assert.equal(supply, 30000, "valor total de tokens nao condiz");
	})
	it('Test transfer tokens units for owner account', async () => {
		await ownerInstanceTitulo.transfer(accounts[0], 1000, {from: accounts[5]});

		const balanceAccount5 = await ownerInstanceTitulo.balanceOf(accounts[5]);
		const balanceOwner = await ownerInstanceTitulo.balanceOf(accounts[0]);
		const supply = await ownerInstanceTitulo.totalSupply();

		assert.equal(balanceAccount5, 0, "valor em conta 5 nao condiz");
		assert.equal(balanceOwner, 30000, "valor em conta 0 nao condiz");
		assert.equal(supply, 30000, "valor total de tokens nao condiz");
	})
	it('Test mint tokens for account 5', async () => {
		await ownerInstanceTitulo.mint(accounts[5], 6000);

		const balanceAccount5 = await ownerInstanceTitulo.balanceOf(accounts[5]);
		const balanceOwner = await ownerInstanceTitulo.balanceOf(accounts[0]);
		const supply = await ownerInstanceTitulo.totalSupply();

		assert.equal(balanceAccount5, 6000, "valor em conta 5 nao condiz");
		assert.equal(balanceOwner, 30000, "valor em conta 0 nao condiz");
		assert.equal(supply, 36000, "valor total de tokens nao condiz");
	})
})