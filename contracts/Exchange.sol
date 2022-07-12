

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import 'openzeppelin-solidity/contracts/token/ERC721/IERC721.sol'

contract Exchange{

  /*
  When a buyer and a seller have approved the exchange, transfers ownership
  of an ERC721 token at a valid contract address with a valid Id from the buyer
  to a seller for an amount of wei
  **/
  function exchangeERC721(address tokenAddress,
                          address buyerAddress,
                          uint256 tokenId,
                          uint256 purchasePrice) //wei
                          public payable {


  }

}
