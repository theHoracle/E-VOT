/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export declare namespace VotingERC2771 {
  export type CandidateStruct = { name: string; voteCount: BigNumberish };

  export type CandidateStructOutput = [name: string, voteCount: bigint] & {
    name: string;
    voteCount: bigint;
  };
}

export interface VotingERC2771Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "addCandidate"
      | "candidateList"
      | "candidates"
      | "getCandidates"
      | "getVoteCount"
      | "hasUserVoted"
      | "isTrustedForwarder"
      | "registerVoter"
      | "vote"
      | "voters"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Voted" | "VoterRegistered"): EventFragment;

  encodeFunctionData(
    functionFragment: "addCandidate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "candidateList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "candidates",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCandidates",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVoteCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasUserVoted",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerVoter",
    values: [AddressLike, string]
  ): string;
  encodeFunctionData(functionFragment: "vote", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "voters", values: [AddressLike]): string;

  decodeFunctionResult(
    functionFragment: "addCandidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "candidateList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "candidates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCandidates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVoteCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasUserVoted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerVoter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voters", data: BytesLike): Result;
}

export namespace VotedEvent {
  export type InputTuple = [voter: AddressLike, candidate: BytesLike];
  export type OutputTuple = [voter: string, candidate: string];
  export interface OutputObject {
    voter: string;
    candidate: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoterRegisteredEvent {
  export type InputTuple = [voter: AddressLike, name: string];
  export type OutputTuple = [voter: string, name: string];
  export interface OutputObject {
    voter: string;
    name: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface VotingERC2771 extends BaseContract {
  connect(runner?: ContractRunner | null): VotingERC2771;
  waitForDeployment(): Promise<this>;

  interface: VotingERC2771Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addCandidate: TypedContractMethod<[name: string], [void], "nonpayable">;

  candidateList: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  candidates: TypedContractMethod<
    [arg0: BytesLike],
    [[string, bigint] & { name: string; voteCount: bigint }],
    "view"
  >;

  getCandidates: TypedContractMethod<
    [],
    [VotingERC2771.CandidateStructOutput[]],
    "view"
  >;

  getVoteCount: TypedContractMethod<[candidateId: BytesLike], [bigint], "view">;

  hasUserVoted: TypedContractMethod<
    [voterAddress: AddressLike],
    [boolean],
    "view"
  >;

  isTrustedForwarder: TypedContractMethod<
    [forwarder: AddressLike],
    [boolean],
    "view"
  >;

  registerVoter: TypedContractMethod<
    [voterAddress: AddressLike, name: string],
    [void],
    "nonpayable"
  >;

  vote: TypedContractMethod<[candidateId: BytesLike], [void], "nonpayable">;

  voters: TypedContractMethod<
    [arg0: AddressLike],
    [
      [boolean, boolean, string] & {
        isRegistered: boolean;
        hasVoted: boolean;
        name: string;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addCandidate"
  ): TypedContractMethod<[name: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "candidateList"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "candidates"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [[string, bigint] & { name: string; voteCount: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCandidates"
  ): TypedContractMethod<[], [VotingERC2771.CandidateStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getVoteCount"
  ): TypedContractMethod<[candidateId: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "hasUserVoted"
  ): TypedContractMethod<[voterAddress: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isTrustedForwarder"
  ): TypedContractMethod<[forwarder: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "registerVoter"
  ): TypedContractMethod<
    [voterAddress: AddressLike, name: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "vote"
  ): TypedContractMethod<[candidateId: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "voters"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [boolean, boolean, string] & {
        isRegistered: boolean;
        hasVoted: boolean;
        name: string;
      }
    ],
    "view"
  >;

  getEvent(
    key: "Voted"
  ): TypedContractEvent<
    VotedEvent.InputTuple,
    VotedEvent.OutputTuple,
    VotedEvent.OutputObject
  >;
  getEvent(
    key: "VoterRegistered"
  ): TypedContractEvent<
    VoterRegisteredEvent.InputTuple,
    VoterRegisteredEvent.OutputTuple,
    VoterRegisteredEvent.OutputObject
  >;

  filters: {
    "Voted(address,bytes32)": TypedContractEvent<
      VotedEvent.InputTuple,
      VotedEvent.OutputTuple,
      VotedEvent.OutputObject
    >;
    Voted: TypedContractEvent<
      VotedEvent.InputTuple,
      VotedEvent.OutputTuple,
      VotedEvent.OutputObject
    >;

    "VoterRegistered(address,string)": TypedContractEvent<
      VoterRegisteredEvent.InputTuple,
      VoterRegisteredEvent.OutputTuple,
      VoterRegisteredEvent.OutputObject
    >;
    VoterRegistered: TypedContractEvent<
      VoterRegisteredEvent.InputTuple,
      VoterRegisteredEvent.OutputTuple,
      VoterRegisteredEvent.OutputObject
    >;
  };
}
