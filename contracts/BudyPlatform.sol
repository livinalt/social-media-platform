// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

// Build a social media platform
// Every content would be in the form of an NFT
// Functions can create, edit, and share images, audio clips, and videos
    
// Function to confirm/authenticate users
// Function to search users
// Create groups
// Comment on contents. Every content is an NFT

contract BudyPlatform {
    
    // Create a struct for users on the community
    struct UserProfile {
        uint256 id;
        string userName;
        address userAddress;
        uint256 numberOfFollowers;
        string groups;
    }

    UserProfile[] allProfiles;

    struct Contents {
        uint256 id;
        string title;
        string description;
        string contentType;
    }
    Contents[] allContents;

    enum ContentType {audio, images, videos, documents }

    // Mapping enum of content type with the struct

    struct UserDataBase {
        address userAddress;
        string  username;
        string password;
    }
    UserDataBase[] usersLogins;

    mapping(address => UserDataBase) user;

    // Register user to the platform
    function registerNewUser(string memory _username, address _userAddress, string memory _password) external {
        // Add new user to the platform
        
        UserDataBase memory newUser = UserDataBase(_userAddress, _username, _password);
        usersLogins.push(newUser);

        // Add profile details of the user
        UserProfile memory newUserProfile = UserProfile(allProfiles.length + 1, _username, _userAddress, 0, "");
        allProfiles.push(newUserProfile);
    }

    function userSignInWithAddress(address _userAddress) external view returns(UserProfile memory) {
        // Search for the user details
        for (uint256 i = 0; i < usersLogins.length; i++) {
            if (usersLogins[i].userAddress == _userAddress) {
                return allProfiles[i];
            }
        }
        revert("User not found");
    }
   
    function userSignInWithPassword(string memory _username, string memory _password) external view returns(UserProfile memory) {
        // Search for the user details
        for (uint256 i = 0; i < usersLogins.length; i++) {
            if (compareStrings(usersLogins[i].username, _username) && compareStrings(usersLogins[i].password, _password)) {
                return allProfiles[i];
            }
        }
        revert("User not found");
    }

    function searchUser(string memory _username) external view returns(UserProfile memory) {
        // Search for a user by username
        for (uint256 i = 0; i < allProfiles.length; i++) {
            if (compareStrings(usersLogins[i].username, _username)) {
                return allProfiles[i];
            }
        }
        revert("User not found");
    }

    function createContent(string memory _title, string memory _description, string memory _contentType) external {
        // Add new content to the platform
        Contents memory newContent = Contents(allContents.length + 1, _title, _description, _contentType);
        allContents.push(newContent);
    }
    
    function searchContent(string memory _title) external view returns(Contents memory) {
        // Search for content by title
        for (uint256 i = 0; i < allContents.length; i++) {
            if (compareStrings(allContents[i].title, _title)) {
                return allContents[i];
            }
        }
        revert("Content not found");
    }

    // Helper function to compare strings
    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }
}
