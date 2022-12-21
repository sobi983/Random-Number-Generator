// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import  "./ERC721r.sol";

contract Machine is ERC721r{

    constructor() ERC721r("MyToken","MTK",5){}
    function mint(uint256 quantity) external{
        _mintRandom(msg.sender,quantity);
    }

    function reserve() external{
        for(uint i=5; i>0;i--){
            _mintAtIndex(msg.sender,i-1);
        }
    }
    
    function _baseURI() override internal view virtual returns(string memory){
        return "ipfs://YOUR_CID/";
    }
}