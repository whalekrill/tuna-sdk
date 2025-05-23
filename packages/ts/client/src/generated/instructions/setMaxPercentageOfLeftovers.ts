/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  combineCodec,
  fixDecoderSize,
  fixEncoderSize,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder,
  getU32Decoder,
  getU32Encoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IAccountSignerMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from '@solana/kit';
import { TUNA_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const SET_MAX_PERCENTAGE_OF_LEFTOVERS_DISCRIMINATOR = new Uint8Array([
  85, 205, 61, 112, 36, 79, 60, 1,
]);

export function getSetMaxPercentageOfLeftoversDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(
    SET_MAX_PERCENTAGE_OF_LEFTOVERS_DISCRIMINATOR
  );
}

export type SetMaxPercentageOfLeftoversInstruction<
  TProgram extends string = typeof TUNA_PROGRAM_ADDRESS,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountTunaConfig extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAuthority extends string
        ? WritableSignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountTunaConfig extends string
        ? WritableAccount<TAccountTunaConfig>
        : TAccountTunaConfig,
      ...TRemainingAccounts,
    ]
  >;

export type SetMaxPercentageOfLeftoversInstructionData = {
  discriminator: ReadonlyUint8Array;
  maxPercentageOfLeftovers: number;
};

export type SetMaxPercentageOfLeftoversInstructionDataArgs = {
  maxPercentageOfLeftovers: number;
};

export function getSetMaxPercentageOfLeftoversInstructionDataEncoder(): Encoder<SetMaxPercentageOfLeftoversInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['maxPercentageOfLeftovers', getU32Encoder()],
    ]),
    (value) => ({
      ...value,
      discriminator: SET_MAX_PERCENTAGE_OF_LEFTOVERS_DISCRIMINATOR,
    })
  );
}

export function getSetMaxPercentageOfLeftoversInstructionDataDecoder(): Decoder<SetMaxPercentageOfLeftoversInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['maxPercentageOfLeftovers', getU32Decoder()],
  ]);
}

export function getSetMaxPercentageOfLeftoversInstructionDataCodec(): Codec<
  SetMaxPercentageOfLeftoversInstructionDataArgs,
  SetMaxPercentageOfLeftoversInstructionData
> {
  return combineCodec(
    getSetMaxPercentageOfLeftoversInstructionDataEncoder(),
    getSetMaxPercentageOfLeftoversInstructionDataDecoder()
  );
}

export type SetMaxPercentageOfLeftoversInput<
  TAccountAuthority extends string = string,
  TAccountTunaConfig extends string = string,
> = {
  authority: TransactionSigner<TAccountAuthority>;
  tunaConfig: Address<TAccountTunaConfig>;
  maxPercentageOfLeftovers: SetMaxPercentageOfLeftoversInstructionDataArgs['maxPercentageOfLeftovers'];
};

export function getSetMaxPercentageOfLeftoversInstruction<
  TAccountAuthority extends string,
  TAccountTunaConfig extends string,
  TProgramAddress extends Address = typeof TUNA_PROGRAM_ADDRESS,
>(
  input: SetMaxPercentageOfLeftoversInput<
    TAccountAuthority,
    TAccountTunaConfig
  >,
  config?: { programAddress?: TProgramAddress }
): SetMaxPercentageOfLeftoversInstruction<
  TProgramAddress,
  TAccountAuthority,
  TAccountTunaConfig
> {
  // Program address.
  const programAddress = config?.programAddress ?? TUNA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    authority: { value: input.authority ?? null, isWritable: true },
    tunaConfig: { value: input.tunaConfig ?? null, isWritable: true },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.authority),
      getAccountMeta(accounts.tunaConfig),
    ],
    programAddress,
    data: getSetMaxPercentageOfLeftoversInstructionDataEncoder().encode(
      args as SetMaxPercentageOfLeftoversInstructionDataArgs
    ),
  } as SetMaxPercentageOfLeftoversInstruction<
    TProgramAddress,
    TAccountAuthority,
    TAccountTunaConfig
  >;

  return instruction;
}

export type ParsedSetMaxPercentageOfLeftoversInstruction<
  TProgram extends string = typeof TUNA_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    authority: TAccountMetas[0];
    tunaConfig: TAccountMetas[1];
  };
  data: SetMaxPercentageOfLeftoversInstructionData;
};

export function parseSetMaxPercentageOfLeftoversInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedSetMaxPercentageOfLeftoversInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 2) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      authority: getNextAccount(),
      tunaConfig: getNextAccount(),
    },
    data: getSetMaxPercentageOfLeftoversInstructionDataDecoder().decode(
      instruction.data
    ),
  };
}
