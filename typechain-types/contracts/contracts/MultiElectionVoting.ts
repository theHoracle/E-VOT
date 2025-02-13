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
} from "../../common";

export interface MultiElectionVotingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "accreditVoter"
      | "addCandidate"
      | "createElection"
      | "electionCount"
      | "elections"
      | "getCandidates"
      | "getElectionDetails"
      | "hasUserVoted"
      | "isTrustedForwarder"
      | "vote"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CandidateAdded"
      | "ElectionCreated"
      | "Voted"
      | "VoterAccredited"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "accreditVoter",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addCandidate",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createElection",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "electionCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "elections",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCandidates",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getElectionDetails",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hasUserVoted",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "accreditVoter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCandidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createElection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "electionCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "elections", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCandidates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getElectionDetails",
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
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
}

export namespace CandidateAddedEvent {
  export type InputTuple = [
    electionId: BigNumberish,
    candidateId: BytesLike,
    name: string
  ];
  export type OutputTuple = [
    electionId: bigint,
    candidateId: string,
    name: string
  ];
  export interface OutputObject {
    electionId: bigint;
    candidateId: string;
    name: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ElectionCreatedEvent {
  export type InputTuple = [
    electionId: BigNumberish,
    title: string,
    startDate: BigNumberish,
    endDate: BigNumberish
  ];
  export type OutputTuple = [
    electionId: bigint,
    title: string,
    startDate: bigint,
    endDate: bigint
  ];
  export interface OutputObject {
    electionId: bigint;
    title: string;
    startDate: bigint;
    endDate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VotedEvent {
  export type InputTuple = [
    electionId: BigNumberish,
    voter: AddressLike,
    candidateId: BytesLike
  ];
  export type OutputTuple = [
    electionId: bigint,
    voter: string,
    candidateId: string
  ];
  export interface OutputObject {
    electionId: bigint;
    voter: string;
    candidateId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoterAccreditedEvent {
  export type InputTuple = [electionId: BigNumberish, voter: AddressLike];
  export type OutputTuple = [electionId: bigint, voter: string];
  export interface OutputObject {
    electionId: bigint;
    voter: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MultiElectionVoting extends BaseContract {
  connect(runner?: ContractRunner | null): MultiElectionVoting;
  waitForDeployment(): Promise<this>;

  interface: MultiElectionVotingInterface;

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

  accreditVoter: TypedContractMethod<
    [electionId: BigNumberish, voterAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  addCandidate: TypedContractMethod<
    [electionId: BigNumberish, name: string],
    [void],
    "nonpayable"
  >;

  createElection: TypedContractMethod<
    [title: string, startDate: BigNumberish, endDate: BigNumberish],
    [void],
    "nonpayable"
  >;

  electionCount: TypedContractMethod<[], [bigint], "view">;

  elections: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint] & {
        title: string;
        startDate: bigint;
        endDate: bigint;
      }
    ],
    "view"
  >;

  getCandidates: TypedContractMethod<
    [electionId: BigNumberish],
    [[string[], string[], bigint[]]],
    "view"
  >;

  getElectionDetails: TypedContractMethod<
    [electionId: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        title: string;
        startDate: bigint;
        endDate: bigint;
        candidateCount: bigint;
      }
    ],
    "view"
  >;

  hasUserVoted: TypedContractMethod<
    [electionId: BigNumberish, voterAddress: AddressLike],
    [boolean],
    "view"
  >;

  isTrustedForwarder: TypedContractMethod<
    [forwarder: AddressLike],
    [boolean],
    "view"
  >;

  vote: TypedContractMethod<
    [electionId: BigNumberish, candidateId: BytesLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "accreditVoter"
  ): TypedContractMethod<
    [electionId: BigNumberish, voterAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addCandidate"
  ): TypedContractMethod<
    [electionId: BigNumberish, name: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createElection"
  ): TypedContractMethod<
    [title: string, startDate: BigNumberish, endDate: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "electionCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "elections"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint] & {
        title: string;
        startDate: bigint;
        endDate: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCandidates"
  ): TypedContractMethod<
    [electionId: BigNumberish],
    [[string[], string[], bigint[]]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getElectionDetails"
  ): TypedContractMethod<
    [electionId: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        title: string;
        startDate: bigint;
        endDate: bigint;
        candidateCount: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "hasUserVoted"
  ): TypedContractMethod<
    [electionId: BigNumberish, voterAddress: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isTrustedForwarder"
  ): TypedContractMethod<[forwarder: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "vote"
  ): TypedContractMethod<
    [electionId: BigNumberish, candidateId: BytesLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "CandidateAdded"
  ): TypedContractEvent<
    CandidateAddedEvent.InputTuple,
    CandidateAddedEvent.OutputTuple,
    CandidateAddedEvent.OutputObject
  >;
  getEvent(
    key: "ElectionCreated"
  ): TypedContractEvent<
    ElectionCreatedEvent.InputTuple,
    ElectionCreatedEvent.OutputTuple,
    ElectionCreatedEvent.OutputObject
  >;
  getEvent(
    key: "Voted"
  ): TypedContractEvent<
    VotedEvent.InputTuple,
    VotedEvent.OutputTuple,
    VotedEvent.OutputObject
  >;
  getEvent(
    key: "VoterAccredited"
  ): TypedContractEvent<
    VoterAccreditedEvent.InputTuple,
    VoterAccreditedEvent.OutputTuple,
    VoterAccreditedEvent.OutputObject
  >;

  filters: {
    "CandidateAdded(uint256,bytes32,string)": TypedContractEvent<
      CandidateAddedEvent.InputTuple,
      CandidateAddedEvent.OutputTuple,
      CandidateAddedEvent.OutputObject
    >;
    CandidateAdded: TypedContractEvent<
      CandidateAddedEvent.InputTuple,
      CandidateAddedEvent.OutputTuple,
      CandidateAddedEvent.OutputObject
    >;

    "ElectionCreated(uint256,string,uint256,uint256)": TypedContractEvent<
      ElectionCreatedEvent.InputTuple,
      ElectionCreatedEvent.OutputTuple,
      ElectionCreatedEvent.OutputObject
    >;
    ElectionCreated: TypedContractEvent<
      ElectionCreatedEvent.InputTuple,
      ElectionCreatedEvent.OutputTuple,
      ElectionCreatedEvent.OutputObject
    >;

    "Voted(uint256,address,bytes32)": TypedContractEvent<
      VotedEvent.InputTuple,
      VotedEvent.OutputTuple,
      VotedEvent.OutputObject
    >;
    Voted: TypedContractEvent<
      VotedEvent.InputTuple,
      VotedEvent.OutputTuple,
      VotedEvent.OutputObject
    >;

    "VoterAccredited(uint256,address)": TypedContractEvent<
      VoterAccreditedEvent.InputTuple,
      VoterAccreditedEvent.OutputTuple,
      VoterAccreditedEvent.OutputObject
    >;
    VoterAccredited: TypedContractEvent<
      VoterAccreditedEvent.InputTuple,
      VoterAccreditedEvent.OutputTuple,
      VoterAccreditedEvent.OutputObject
    >;
  };
}
