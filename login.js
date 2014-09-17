
/**
 * Login Class
 */
function Login() {
	// sessionId -> user map
	this.sessionMap = {
		99999 : { name: 'Foo', email: 'foo@bar.com' }
	};
}
/**
 * Say Hello {name} to the user
 */
Login.prototype.hello = function(sessionId) {
	return 'Hello ' + this.sessionMap[sessionId].name + '\n';
};

/**
 * Check whether the given session id is valid (is in sessionMap) or not.
 */
Login.prototype.isLoggedIn = function(sessionId) {
	if(sessionId in this.sessionMap){
	return true;
	}
	else
	{	
	return false;
	}
};

/**
 * Create a new session id for the given user.
 */
Login.prototype.login = function(_name, _email) {
   /*
	* Generate unique session id and set it into sessionMap like foo@bar.com
	*/
	var sessionId = new Date().getTime();
	this.sessionMap[sessionId] = { name: _name, email: _email } 
	
	console.log('new session id ' + sessionId + ' for login::' + _email);
	
	return sessionId;
};

/**
 * Upade the current sessionId.
 */
Login.prototype.regenerateSessionId = function(_sid) {
	var n_sessionId = new Date().getTime();
	var _name = this.sessionMap[_sid].name; 
	var _email = this.sessionMap[_sid].email;
	this.sessionMap[n_sessionId] = { name: _name, email: _email } 
	delete this.sessionMap[_sid];
	console.log('new session id ' + n_sessionId + ' for login::' + _email);
	return n_sessionId;
} ;

/**
 * Logout from the server
 */ 
Login.prototype.logout = function(sessionId) {

	delete this.sessionMap[sessionId];
	console.log('logout::' + sessionId);
    	return true;   
};

// Export the Login class
module.exports = new Login();
