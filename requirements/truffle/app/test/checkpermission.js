const CheckPermission = artifacts.require("CheckPermission");

contract('CheckPermission', (accounts) => {
	let ownerInstance;

	before(async () => {
		ownerInstance = await CheckPermission.new({from: accounts[0]});
	})

	it('Test add permission for a account.', async () => {
		//const instance = await CheckPermission.new({from: accounts[0]});
		await ownerInstance.addPermission(accounts[1], {id: 10, hasPermission: true});
		
		const result = await ownerInstance.checkPermission.call(accounts[1]);
		assert.equal(result, true, "usuario nao foi inserido");
	});
	it('Test remove permission for a account.', async () => {
		const r1 = await ownerInstance.checkPermission.call(accounts[1]);
		assert.equal(r1, true, "usuario nao foi inserido");

		await ownerInstance.removePermission(accounts[1]);
		
		const r2 = await ownerInstance.checkPermission.call(accounts[1]);
		assert.equal(r2, false, "usuario nao foi inserido");
	});
})