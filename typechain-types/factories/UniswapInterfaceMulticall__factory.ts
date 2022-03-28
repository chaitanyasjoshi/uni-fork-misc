/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapInterfaceMulticall,
  UniswapInterfaceMulticallInterface,
} from "../UniswapInterfaceMulticall";

const _abi = [
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct UniswapInterfaceMulticall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "gasUsed",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct UniswapInterfaceMulticall.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506106ed806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630f28c97d146100465780631749e1e31461005b5780634d2301cc1461007c575b600080fd5b425b6040519081526020015b60405180910390f35b61006e610069366004610333565b6100a4565b6040516100529291906104ec565b61004861008a3660046105cc565b73ffffffffffffffffffffffffffffffffffffffff163190565b8051439060609067ffffffffffffffff8111156100c3576100c3610263565b60405190808252806020026020018201604052801561011057816020015b604080516060808201835260008083526020830152918101919091528152602001906001900390816100e15790505b50905060005b835181101561025d576000806000868481518110610136576101366105ee565b602002602001015160000151878581518110610154576101546105ee565b602002602001015160200151888681518110610172576101726105ee565b60200260200101516040015192509250925060005a90506000808573ffffffffffffffffffffffffffffffffffffffff1685856040516101b2919061061d565b60006040518083038160008787f1925050503d80600081146101f0576040519150601f19603f3d011682016040523d82523d6000602084013e6101f5565b606091505b509150915060005a6102079085610668565b90506040518060600160405280841515815260200182815260200183815250898981518110610238576102386105ee565b60200260200101819052505050505050505080806102559061067f565b915050610116565b50915091565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156102b5576102b5610263565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561030257610302610263565b604052919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461032e57600080fd5b919050565b6000602080838503121561034657600080fd5b823567ffffffffffffffff8082111561035e57600080fd5b818501915085601f83011261037257600080fd5b81358181111561038457610384610263565b8060051b6103938582016102bb565b91825283810185019185810190898411156103ad57600080fd5b86860192505b838310156104af578235858111156103cb5760008081fd5b860160607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828d0381018213156104025760008081fd5b61040a610292565b6104158b850161030a565b81526040848101358c8301529284013592898411156104345760008081fd5b83850194508e603f86011261044b57600093508384fd5b8b85013593508984111561046157610461610263565b6104718c84601f870116016102bb565b92508383528e818587010111156104885760008081fd5b838186018d85013760009383018c01939093529182015283525091860191908601906103b3565b9998505050505050505050565b60005b838110156104d75781810151838201526020016104bf565b838111156104e6576000848401525b50505050565b6000604080830185845260208281860152818651808452606093508387019150838160051b88010183890160005b838110156105bc578983037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0018552815180511515845286810151878501528801518884018890528051888501819052608061057b82828801858c016104bc565b96880196601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169490940190930192509085019060010161051a565b50909a9950505050505050505050565b6000602082840312156105de57600080fd5b6105e78261030a565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000825161062f8184602087016104bc565b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561067a5761067a610639565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036106b0576106b0610639565b506001019056fea26469706673582212205003519879ace40d51647897b52036297827d80fbe4c43a91e7e61bfac82255864736f6c634300080d0033";

type UniswapInterfaceMulticallConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapInterfaceMulticallConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapInterfaceMulticall__factory extends ContractFactory {
  constructor(...args: UniswapInterfaceMulticallConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapInterfaceMulticall> {
    return super.deploy(overrides || {}) as Promise<UniswapInterfaceMulticall>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UniswapInterfaceMulticall {
    return super.attach(address) as UniswapInterfaceMulticall;
  }
  override connect(signer: Signer): UniswapInterfaceMulticall__factory {
    return super.connect(signer) as UniswapInterfaceMulticall__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapInterfaceMulticallInterface {
    return new utils.Interface(_abi) as UniswapInterfaceMulticallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapInterfaceMulticall {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UniswapInterfaceMulticall;
  }
}
