// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import 'openzeppelin-solidity/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import 'openzeppelin-solidity/contracts/access/Ownable.sol';

contract SoundSkiers is ERC721Enumerable, Ownable {

    using Strings for uint256;

    string _baseTokenURI;
    uint256 private _reserved = 100;
    uint256 private _price = 0.06 ether;
    address _creator;

    constructor(string memory baseURI, address _creator) ERC721("Sound Skiers", "SKI")  {
        setBaseURI(baseURI);
        _creator = _creator;
        // team gets the first skier
        _safeMint( _creator, 0);
    }
    // Just in case Eth does some crazy stuff
    function setPrice(uint256 _newPrice) public onlyOwner() {
        _price = _newPrice;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }

    function getPrice() public view returns (uint256){
        return _price;
    }

    function getCreator() public view returns (address){
      return _creator;
    }
    
}
