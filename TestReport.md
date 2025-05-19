# Test Report

<The goal of this document is to explain how the application was tested, detailing how the test cases were defined and what they cover>

# Contents

- [Dependency graph](#dependency-graph)

- [Integration approach](#integration-approach)

- [Tests](#tests)

- [Coverage](#Coverage)





# Dependency graph 

![Dependency Graph](./code/images/Dependency%20graph-group08.png)   


# Integration approach

    <Write here the integration sequence you adopted, in general terms (top down, bottom up, mixed) and as sequence
    (ex: step1: unit A, step 2: unit A+B, step 3: unit A+B+C, etc)> 
    <Some steps may  correspond to unit testing (ex step1 in ex above)>
    <One step will  correspond to API testing, or testing unit route.js>

**Mixed**: we started with unit testing for some modules, then proceeded with the integration of the modules for which we had finished the unit testing. This lead to the writing in parallel of some units and some intregration testing
* step1: utils
* step2: utils + transactions
* step3: utils + categories
* step4: utils + categories +transactions
* step5: utils + users (users)
* step6: utilt + users (groups)
* step7: utils + users
* step8: utils + categories + transactions + users 


# Tests

   <in the table below list the test cases defined For each test report the object tested, the test level (API, integration, unit) and the technique used to define the test case  (BB/ eq partitioning, BB/ boundary, WB/ statement coverage, etc)>   <split the table if needed>

| Test case name     | Object(s) tested  | Test level | Technique used |
| :------------- |:-------------|:--|:--|
|  401 - unathorized access    | createCategory | unit,API | WB - statement coverage |
|  400 - Empty - invalid value parameters    | createCategory | unit,API | WB - statement coverage |
|  400 - A category of this type is already present    | createCategory | unit,API | WB - statement coverage |
|  200 - Category created successfully    | createCategory | unit,API | WB - statement coverage |
|  401 - unathorized access | updateCategory | unit,API | WB - statement coverage |
|  400 - Empty values | updateCategory | unit,API | WB - statement coverage |
|  400 - Missing values | updateCategory | unit,API | WB - statement coverage |
|  400 - New type belongs to another category | updateCategory | unit,API | WB - statement coverage |
|  400 - Category does not exist | updateCategory | unit,API | WB - statement coverage |
|  200 - Category updated successfully (changed also the type) | updateCategory | unit,API |WB - statement coverage |
|  200 - Category updated successfully (changed only the color) | updateCategory | unit,API | WB - statement coverage |
|401 - unathorized access|deleteCategory|unit,API|WB - statement coverage|
|400 - Missing array of types|deleteCategory|unit,API|WB - statement coverage|
|400 - Empty array of types|deleteCategory|unit,API|WB - statement coverage|
|400 - Category with empty type to be deleted|deleteCategory|unit,API|WB - statement coverage|
|400 - Category of this type does not exist|deleteCategory|unit,API|WB - statement coverage|
|400 - Trying to delete the only available category|deleteCategory|unit,API|WB - statement coverage|
|200 - Category deleted successfully (N>T)|deleteCategory|unit,API|WB - statement coverage|
|200 - Category deleted successfully (N = T)|deleteCategory|unit,API|WB - statement coverage|
|401 - unathorized access|getCategories|unit,API|WB - statement coverage|
|200 - should retrieve list of all categories|getCategories|unit,API|WB - statement coverage|
|200 - should retrieve empty list (no categories)|getCategories|unit,API|WB - statement coverage|
|401 - unathorized access|createTransaction|unit,API|WB - statement coverage|
|400 - missing or empty body parameter|createTransaction|unit,API|WB - statement coverage|
|400 - Amount cannot be parsed|createTransaction|unit,API|WB - statement coverage|
|400 - User param and body mismatch|createTransaction|unit,API|WB - statement coverage|
|400 - User not found|createTransaction|unit,API|WB - statement coverage|
|400 - Category not found|createTransaction|unit,API|WB - statement coverage|
|200 - Transaction correctly inserted|createTransaction|unit,API|WB - statement coverage|
|401 - unathorized access|getAllTransactions|unit,API|WB - statement coverage|
|200 - Should find multiple transactions|getAllTransactions|unit,API|WB - statement coverage|
|200 - Should find empty list if no transactions are present|getAllTransactions|unit,API|WB - statement coverage|
|401 - unathorized access - User|getTransactionsByUser|unit,API|WB - statement coverage|
|401 - unathorized access - Admin|getTransactionsByUser|unit,API|WB - statement coverage|
|400 - User not found|getTransactionsByUser|unit,API|WB - statement coverage|
|200 - Should find multiple transactions for testuser|getTransactionsByUser|unit,API|WB - statement coverage|
|200 - Should return empty array because user has no transactions|getTransactionsByUser|unit,API|WB - statement coverage|
|401 - unathorized access - User|getTransactionsByUserByCategory|unit,API|WB - statement coverage|
|401 - unathorized access - Admin|getTransactionsByUserByCategory|unit,API|WB - statement coverage|
|400 - User not found|getTransactionsByUserByCategory|unit,API|WB - statement coverage|
|400 - Category not found|getTransactionsByUserByCategory|unit,API|WB - statement coverage|
|200 - Should find multiple transactions for testuser|getTransactionsByUserByCategory|unit,API|WB - statement coverage|
|200 - Should return empty array because user has no transactions/no transaction with such category|getTransactionsByUserByCategory|unit,API|WB - statement coverage|
|400 - not an existing group|getTransactionsByGroup|unit,API|WB - statement coverage|
|401 - unathorized access - User not part of group|getTransactionsByGroup|unit,API|WB - statement coverage|
|401 - unathorized access - Admin|getTransactionsByGroup|unit,API|WB - statement coverage|
|200 - Should find a transactions for each user in group|getTransactionsByGroup|unit,API|WB - statement coverage|
|200 - Should find a transactions for each user in group, but a user has no transactions|getTransactionsByGroup|unit,API|WB - statement coverage|
|200 - Should return an empty array, because no user has any transactions|getTransactionsByGroup|unit,API|WB - statement coverage|
|401 - unathorized access - User not part of group|getTransactionsByGroupByCategory|unit,API|WB - statement coverage|
|401 - unathorized access - Admin|getTransactionsByGroupByCategory|unit,API|WB - statement coverage|
|400 - not an existing group|getTransactionsByGroupByCategory|unit,API|WB - statement coverage|
|400 - not an existing category|getTransactionsByGroupByCategory|unit,API|WB - statement coverage|
|200 - Should find a single transactions for each user in group even thought some has more than one|getTransactionsByGroupByCategory|unit,API|WB - statement coverage|
|200 - Should find a transactions for each user in group, except for one who has no trans of that cat|getTransactionsByGroupByCategory|unit,API|WB - statement coverage|
|200 - Should return an empty array, because no user has any transaction of that category|getTransactionsByGroupByCategory|unit,API|WB - statement coverage|
|401 - unathorized access|deleteTransaction|unit,API|WB - statement coverage|
|400 - User not found|deleteTransaction|unit,API|WB - statement coverage|
|400 - missing id in body|deleteTransaction|unit,API|WB - statement coverage|
|400 - empty id in body|deleteTransaction|unit,API|WB - statement coverage|
|400 - no such transaction for this user|deleteTransaction|unit,API|WB - statement coverage|
|400 - unable to delete transaction|deleteTransaction|unit,API|WB - statement coverage|
|200 - Transaction succesfully deleted|deleteTransaction|unit,API|WB - statement coverage|
|401 - unathorized access|deleteTransactions|unit,API|WB - statement coverage|
|400 - missing ids in body|deleteTransactions|unit,API|WB - statement coverage|
|400 - ids cannot be empty|deleteTransactions|unit,API|WB - statement coverage|
|400 - one or more transactions are not present|deleteTransactions|unit,API|WB - statement coverage|
|200 - Transactions succesfully deleted|deleteTransactions|unit,API|WB - statement coverage|
|401 - Admin authentication failed|getUsers|unit,API|WB - statement coverage|
|200 - should return empty list if there are no users|getUsers|unit,API|WB - statement coverage|
|200 - should retrieve list of all users|getUsers|unit,API|WB - statement coverage|
|200 - should return user data for authenticated user requests|getUsers|unit,API|WB - statement coverage|
|200 - should return user data for authenticated admin requests|getUsers|unit,API|WB - statement coverage|
|400 - if user is not found|getUsers|unit,API|WB - statement coverage|
|400 - if user is not found as admin|getUsers|unit,API|WB - statement coverage|
|401 - if request is not authenticated|getUsers|unit,API|WB - statement coverage|
|401 - unauthorized access|createGroup|unit,API|WB - statement coverage|
|400 - Missing name|createGroup|unit,API|WB - statement coverage|
|400 - Empty name|createGroup|unit,API|WB - statement coverage|
|400 - Empty parameters|createGroup|unit,API|WB - statement coverage|
|400 - Group name already used|createGroup|unit,API|WB - statement coverage|
|400 - user calling is already in a group|createGroup|unit,API|WB - statement coverage|
|400 - one or more mails are empty strings|createGroup|unit,API|WB - statement coverage|
|400 - one or more mails are not in a valid format|createGroup|unit,API|WB - statement coverage|
|400 - all users already in group or do not exist|createGroup|unit,API|WB - statement coverage|
|200 - Group created correctly|createGroup|unit,API|WB - statement coverage|
|200 - should return user data for authenticated user requests|getUser|unit,API|WB - statement coverage|
|200 - should return user data for authenticated admin requests|getUser|unit,API|WB - statement coverage|
|400 - if user is not found|getUser|unit,API|WB - statement coverage|
|400 - if user is not found as admin|getUser|unit,API|WB - statement coverage|
|401 - if request is not authenticated|getUser|unit,API|WB - statement coverage|
|401 - unauthorized access|createGroup|unit,API|WB - statement coverage|
|400 - Missing name|createGroup|unit,API|WB - statement coverage|
|400 - Empty name|createGroup|unit,API|WB - statement coverage|
|400 - Empty parameters|createGroup|unit,API|WB - statement coverage|
|400 - Group name already used|createGroup|unit,API|WB - statement coverage|
|400 - user calling is already in a group|createGroup|unit,API|WB - statement coverage|
|400 - one or more mails are empty strings|createGroup|unit,API|WB - statement coverage|
|400 - one or more mails are not in a valid format|createGroup|unit,API|WB - statement coverage|
|400 - all users already in group or do not exist|createGroup|unit,API|WB - statement coverage|
|200 - Group created correctly|createGroup|unit,API|WB - statement coverage|
|401 - unauthorized access|getGroups|unit,API|WB - statement coverage|
|200 - Admin gets all groups|getGroups|unit,API|WB - statement coverage|
|400 - Admin gets []: no group exists|getGroups|unit,API|WB - statement coverage|
|401 - unauthorized access|getGroup|unit,API|WB - statement coverage|
|400 - The group does not exist|getGroup|unit,API|WB - statement coverage|
|200 - Returns the required group|getGroup|unit,API|WB - statement coverage|
|400 - The group does not exist|addToGroup|unit,API|WB - statement coverage|
|401 - unauthorized acces to admin route|addToGroup|unit,API|WB - statement coverage|
|401 - unauthorized acces to user route|addToGroup|unit,API|WB - statement coverage|
|400 - missing body attributes|addToGroup|unit,API|WB - statement coverage|
|400 - emails cannot be empty|addToGroup|unit,API|WB - statement coverage|
|400 - wrong email format|addToGroup|unit,API|WB - statement coverage|
|400 - all users already in a group or not existing|addToGroup|unit,API|WB - statement coverage|
|200 - Successfully inserted|addToGroup|unit,API|WB - statement coverage|
|401 - unauthorized acces to admin route|removeFromGroup|unit,API|WB - statement coverage|
|401 - unauthorized acces to user route|removeFromGroup|unit,API|WB - statement coverage|
|400 - The group does not exist|removeFromGroup|unit,API|WB - statement coverage|
|400 - missing body attributes|removeFromGroup|unit,API|WB - statement coverage|
|400 - emails cannot be empty|removeFromGroup|unit,API|WB - statement coverage|
|400 - wrong email format|removeFromGroup|unit,API|WB - statement coverage|
|400 - all users already in a group or not existing|removeFromGroup|unit,API|WB - statement coverage|
|400 - only one member|removeFromGroup|unit,API|WB - statement coverage|
|200 - Succesfully deleted members|removeFromGroup|unit,API|WB - statement coverage|
|200 - Succesfully deleted members - keep the first because #members == #emails|removeFromGroup|unit,API|WB - statement coverage|
|200 - delete a user and return the number of deleted transactions and whether the user was deleted from a group|deleteUser|unit,API|WB - statement coverage|
|400 - cannot delete admin error|deleteUser|unit,API|WB - statement coverage|
|400 - user not found|deleteUser|unit,API|WB - statement coverage|
|401 - if request is not authenticated|deleteUser|unit,API|WB - statement coverage|
|400 - if email is not provided|deleteUser|unit,API|WB - statement coverage|
|400 - if email format is invalid|unit,API|WB - statement coverage|
|400 - if email format is empty string|deleteUser|unit,API|WB - statement coverage|
|401 - unauthorized access - not an Admin|deleteGroup|unit,API|WB - statement coverage|
|400 - Admin did not insert all necessary data|deleteGroup|unit,API|WB - statement coverage|
|400 - Admin insert an empty string as a name|deleteGroup|unit,API|WB - statement coverage|
|400 - Admin inserts the name of a group that does not exist|deleteGroup|unit,API|WB - statement coverage|
|200 - The group is deleted by the admin|deleteGroup|unit,API|WB - statement coverage|
|Should return an empty obj when no params are passed|handleDateFilterParams|unit,API|WB - statement coverage|
|Should throw an error when date and form/upto are both used|handleDateFilterParams|unit,API|WB - statement coverage|
|Should throw an error when using a wrong date format|handleDateFilterParams|unit,API|WB - statement coverage|
|Should return an close interval using both from and upto|handleDateFilterParams|unit,API|WB - statement coverage|
|Should return a right-open interval using only from|handleDateFilterParams|unit,API|WB - statement coverage|
|Should return a left-open interval using only upto|handleDateFilterParams|unit,API|WB - statement coverage|
|Should return a close interval using only date|handleDateFilterParams|unit,API|WB - statement coverage|
|Should return an empty obj when no params are passed|handleAmountFilterParams|unit,API|WB - statement coverage|
|Should throw an error when one or both parameters are not parseable to int|handleAmountFilterParams|unit,API|WB - statement coverage|
|Should return an close interval using both min and max|handleAmountFilterParams|unit,API|WB - statement coverage|
|Should return a right-open interval using only min|handleAmountFilterParams|unit,API|WB - statement coverage|
|Should return a left-open interval using only max|handleAmountFilterParams|unit,API|WB - statement coverage|
|200 - should successfully register|register|unit,API|WB - statement coverage|
|400 - Username not defined|register|unit,API|WB - statement coverage|
|400 - email not defined|register|unit,API|WB - statement coverage|
|400 - password not defined|register|unit,API|WB - statement coverage|
|400 - username empty string|register|unit,API|WB - statement coverage|
|400 - email empty string|register|unit,API|WB - statement coverage|
|400 - password empty string|register|unit,API|WB - statement coverage|
|400 - email invalid format|register|unit,API|WB - statement coverage|
|400 - Email/Username already registered|register|unit,API|WB - statement coverage|
|400 - email already used by another person|register|unit,API|WB - statement coverage|
|200 - should successfully register the admin|registerAdmin|unit,API|WB - statement coverage|
|400 - Username not defined|registerAdmin|unit,API|WB - statement coverage|
|400 - email not defined|registerAdmin|unit,API|WB - statement coverage|
|400 - password not defined|registerAdmin|unit,API|WB - statement coverage|
|400 - username empty string|registerAdmin|unit,API|WB - statement coverage|
|400 - email empty string|registerAdmin|unit,API|WB - statement coverage|
|400 - password empty string|registerAdmin|unit,API|WB - statement coverage|
|400 - email invalid format|registerAdmin|unit,API|WB - statement coverage|
|400 - Email/Username already registered|registerAdmin|unit,API|WB - statement coverage|
|400 - email already used by another person|registerAdmin|unit,API|WB - statement coverage|
|400 - email or password is missing|login|unit,API|WB - statement coverage|
|400 - email or password is empty string|login|unit,API|WB - statement coverage|
|400 - email is in an invalid format|login|unit,API|WB - statement coverage|
|400 - user does not exist|login|unit,API|WB - statement coverage|
|400 - password is incorrect|login|unit,API|WB - statement coverage|
|200 - login successfully with valid credentials|login|unit,API|WB - statement coverage|
|400 - No refresh token|logout|unit,API|WB - statement coverage|
|400 - User not found|logout|unit,API|WB - statement coverage|
|200 - User logged out successfully|logout|unit,API|WB - statement coverage|




# Coverage



## Coverage of FR

<Report in the following table the coverage of  functional requirements (from official requirements) >

| ID        | Functional Requirements covered  | Test(s) |
| :------------- |:-------------|:--|
|  FR1    | Manage users | ------------- |
| FR11 | register |  create a new user |
| FR12| login |  authorize access for a given user |
| FR13| logout | stop authorization for a given user|
| FR14 | registerAdmin | create a new Admin |
| FR15 | getUsers | return all users |
| FR16 | getUser | return info about a specific user |
| FR17 | deleteUser | cancel a user |
| FR2 | Manage groups | ------------- |
| FR21 | createGroup | create a new group |
| FR22| getGroups | return all groups |
| FR23| getGroup | return info about a specific group |
| FR24| addToGroup | add many users to a given group |
| FR26| removeFromGroup | remove many users from a given group |
| FR28| deleteGroup | cancel a group, users members of the group remain unchanged |
|  FR3   |  Manage  transactions| -------------|
|FR31| createTransaction| create a new transaction|
|FR32| getAllTransactions | return all transactions (by all users)|
| FR33| getTransactionsByUser  | return transactions of a given user. transactions may be filtered by date, by period, by max / min amount|
| FR34| getTransactionsByUserByCategory| return transactions of a given user and a given category|
| FR35| getTransactionsByGroup | return all transactions of all users of a given group|
| FR36| getTransactionsByGroupByCategory | return all transactions of all users of a given group, filtered by a given category|
| FR37| deleteTransaction | delete a given transaction|
| FR38| deleteTransactions | delete many transactions|
|  FR4  |  Manage categories | -------------|
| FR41| createCategory | 401 - unathorized access,  400 - Empty - invalid value parameters,  400 - A category of this type is already present,  200 - Category created successfully |
| FR42| updateCategory | 401 - unathorized access,  400 - Empty - invalid value parameters,  400 - Missing values,  400 - New type belongs to another category,  400 - Category does not exist,  200 - Category updated successfully (changed only the color),  200 - Category updated successfully (changed also the type)|
| FR43| deleteCategory | 401 - unathorized access,  400 - Missing array of types,  400 - Empty array of types,  400 - Category with empty type to be deleted,  400 - Category of this type does not exist,  400 - Trying to delete the only available category,  400 - Trying to delete the only available category,  200 - Category deleted successfully (N>T),  200 - Category deleted successfully (N = T)|
| FR44 | getCategories | 401 - unathorized access,  200 - should retrieve list of all categories,  200 - should retrieve empty list (no categories)|

## Coverage white box

Report here the screenshot of coverage values obtained with jest-- coverage 






