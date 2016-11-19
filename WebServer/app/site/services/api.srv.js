(function(){

    angular
        .module('finApp')
        .service('apiService', apiService)

    function apiService($http)
    {
    	var user_data = undefined;
    	var comparison = undefined;

    	var comparison_out = undefined;
    	var promise = $http.post('/getdata', "username=" + localStorage.getItem('username')).success(function(data){ user_data = JSON.parse(data); });
    	var promise2 = $http.post('/compare', "username=" + localStorage.getItem('username') + "&type=demographic").success(function(data){
    		comparison = JSON.parse(data);
    		comparison_out = [{title: "Education", val: comparison[0]},
    						{title: "Entertainment", val: comparison[1]},
    						{title: "Clothing", val: comparison[2]},
    						{title: "Electronics", val: comparison[3]},
    						{title: "Restaurants", val: comparison[4]},
    						{title: "Groceries", val: comparison[5]},
    						{title: "Building", val: comparison[6]},
    						{title: "Art", val: comparison[7]},
    						{title: "Sports", val: comparison[8]},
    						{title: "Alcohol", val: comparison[9]},
    						{title: "Household", val: comparison[10]},
    						{title: "Grooming", val: comparison[11]}];
    	});

    	//Function Binding
    	this.is_empty = function ()
    	{
    		return user_data.transaction_list.length == 0;
    	}

    	this.get_transaction_list = function()
    	{
    		return user_data.transaction_list;
    	}

    	this.get_comparison = function()
    	{
    		return comparison_out;
    	}
    }
})();
