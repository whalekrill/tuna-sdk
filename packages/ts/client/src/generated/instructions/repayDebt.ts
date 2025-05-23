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
  getU64Decoder,
  getU64Encoder,
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
  type ReadonlyAccount,
  type ReadonlyUint8Array,
  type TransactionSigner,
  type WritableAccount,
  type WritableSignerAccount,
} from '@solana/kit';
import { TUNA_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export const REPAY_DEBT_DISCRIMINATOR = new Uint8Array([
  79, 200, 30, 15, 252, 22, 162, 8,
]);

export function getRepayDebtDiscriminatorBytes() {
  return fixEncoderSize(getBytesEncoder(), 8).encode(REPAY_DEBT_DISCRIMINATOR);
}

export type RepayDebtInstruction<
  TProgram extends string = typeof TUNA_PROGRAM_ADDRESS,
  TAccountAuthority extends string | IAccountMeta<string> = string,
  TAccountMarket extends string | IAccountMeta<string> = string,
  TAccountVaultA extends string | IAccountMeta<string> = string,
  TAccountVaultB extends string | IAccountMeta<string> = string,
  TAccountVaultAAta extends string | IAccountMeta<string> = string,
  TAccountVaultBAta extends string | IAccountMeta<string> = string,
  TAccountTunaPosition extends string | IAccountMeta<string> = string,
  TAccountTunaPositionAtaA extends string | IAccountMeta<string> = string,
  TAccountTunaPositionAtaB extends string | IAccountMeta<string> = string,
  TAccountTunaPositionOwnerAtaA extends string | IAccountMeta<string> = string,
  TAccountTunaPositionOwnerAtaB extends string | IAccountMeta<string> = string,
  TAccountTokenProgram extends
    | string
    | IAccountMeta<string> = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountAuthority extends string
        ? WritableSignerAccount<TAccountAuthority> &
            IAccountSignerMeta<TAccountAuthority>
        : TAccountAuthority,
      TAccountMarket extends string
        ? ReadonlyAccount<TAccountMarket>
        : TAccountMarket,
      TAccountVaultA extends string
        ? WritableAccount<TAccountVaultA>
        : TAccountVaultA,
      TAccountVaultB extends string
        ? WritableAccount<TAccountVaultB>
        : TAccountVaultB,
      TAccountVaultAAta extends string
        ? WritableAccount<TAccountVaultAAta>
        : TAccountVaultAAta,
      TAccountVaultBAta extends string
        ? WritableAccount<TAccountVaultBAta>
        : TAccountVaultBAta,
      TAccountTunaPosition extends string
        ? WritableAccount<TAccountTunaPosition>
        : TAccountTunaPosition,
      TAccountTunaPositionAtaA extends string
        ? WritableAccount<TAccountTunaPositionAtaA>
        : TAccountTunaPositionAtaA,
      TAccountTunaPositionAtaB extends string
        ? WritableAccount<TAccountTunaPositionAtaB>
        : TAccountTunaPositionAtaB,
      TAccountTunaPositionOwnerAtaA extends string
        ? WritableAccount<TAccountTunaPositionOwnerAtaA>
        : TAccountTunaPositionOwnerAtaA,
      TAccountTunaPositionOwnerAtaB extends string
        ? WritableAccount<TAccountTunaPositionOwnerAtaB>
        : TAccountTunaPositionOwnerAtaB,
      TAccountTokenProgram extends string
        ? ReadonlyAccount<TAccountTokenProgram>
        : TAccountTokenProgram,
      ...TRemainingAccounts,
    ]
  >;

export type RepayDebtInstructionData = {
  discriminator: ReadonlyUint8Array;
  collateralFundsA: bigint;
  collateralFundsB: bigint;
};

export type RepayDebtInstructionDataArgs = {
  collateralFundsA: number | bigint;
  collateralFundsB: number | bigint;
};

export function getRepayDebtInstructionDataEncoder(): Encoder<RepayDebtInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([
      ['discriminator', fixEncoderSize(getBytesEncoder(), 8)],
      ['collateralFundsA', getU64Encoder()],
      ['collateralFundsB', getU64Encoder()],
    ]),
    (value) => ({ ...value, discriminator: REPAY_DEBT_DISCRIMINATOR })
  );
}

export function getRepayDebtInstructionDataDecoder(): Decoder<RepayDebtInstructionData> {
  return getStructDecoder([
    ['discriminator', fixDecoderSize(getBytesDecoder(), 8)],
    ['collateralFundsA', getU64Decoder()],
    ['collateralFundsB', getU64Decoder()],
  ]);
}

export function getRepayDebtInstructionDataCodec(): Codec<
  RepayDebtInstructionDataArgs,
  RepayDebtInstructionData
> {
  return combineCodec(
    getRepayDebtInstructionDataEncoder(),
    getRepayDebtInstructionDataDecoder()
  );
}

export type RepayDebtInput<
  TAccountAuthority extends string = string,
  TAccountMarket extends string = string,
  TAccountVaultA extends string = string,
  TAccountVaultB extends string = string,
  TAccountVaultAAta extends string = string,
  TAccountVaultBAta extends string = string,
  TAccountTunaPosition extends string = string,
  TAccountTunaPositionAtaA extends string = string,
  TAccountTunaPositionAtaB extends string = string,
  TAccountTunaPositionOwnerAtaA extends string = string,
  TAccountTunaPositionOwnerAtaB extends string = string,
  TAccountTokenProgram extends string = string,
> = {
  /**
   *
   * TUNA accounts
   *
   */
  authority: TransactionSigner<TAccountAuthority>;
  market: Address<TAccountMarket>;
  vaultA: Address<TAccountVaultA>;
  vaultB: Address<TAccountVaultB>;
  vaultAAta: Address<TAccountVaultAAta>;
  vaultBAta: Address<TAccountVaultBAta>;
  tunaPosition: Address<TAccountTunaPosition>;
  tunaPositionAtaA: Address<TAccountTunaPositionAtaA>;
  tunaPositionAtaB: Address<TAccountTunaPositionAtaB>;
  tunaPositionOwnerAtaA: Address<TAccountTunaPositionOwnerAtaA>;
  tunaPositionOwnerAtaB: Address<TAccountTunaPositionOwnerAtaB>;
  /**
   *
   * Other accounts
   *
   */
  tokenProgram?: Address<TAccountTokenProgram>;
  collateralFundsA: RepayDebtInstructionDataArgs['collateralFundsA'];
  collateralFundsB: RepayDebtInstructionDataArgs['collateralFundsB'];
};

export function getRepayDebtInstruction<
  TAccountAuthority extends string,
  TAccountMarket extends string,
  TAccountVaultA extends string,
  TAccountVaultB extends string,
  TAccountVaultAAta extends string,
  TAccountVaultBAta extends string,
  TAccountTunaPosition extends string,
  TAccountTunaPositionAtaA extends string,
  TAccountTunaPositionAtaB extends string,
  TAccountTunaPositionOwnerAtaA extends string,
  TAccountTunaPositionOwnerAtaB extends string,
  TAccountTokenProgram extends string,
  TProgramAddress extends Address = typeof TUNA_PROGRAM_ADDRESS,
>(
  input: RepayDebtInput<
    TAccountAuthority,
    TAccountMarket,
    TAccountVaultA,
    TAccountVaultB,
    TAccountVaultAAta,
    TAccountVaultBAta,
    TAccountTunaPosition,
    TAccountTunaPositionAtaA,
    TAccountTunaPositionAtaB,
    TAccountTunaPositionOwnerAtaA,
    TAccountTunaPositionOwnerAtaB,
    TAccountTokenProgram
  >,
  config?: { programAddress?: TProgramAddress }
): RepayDebtInstruction<
  TProgramAddress,
  TAccountAuthority,
  TAccountMarket,
  TAccountVaultA,
  TAccountVaultB,
  TAccountVaultAAta,
  TAccountVaultBAta,
  TAccountTunaPosition,
  TAccountTunaPositionAtaA,
  TAccountTunaPositionAtaB,
  TAccountTunaPositionOwnerAtaA,
  TAccountTunaPositionOwnerAtaB,
  TAccountTokenProgram
> {
  // Program address.
  const programAddress = config?.programAddress ?? TUNA_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    authority: { value: input.authority ?? null, isWritable: true },
    market: { value: input.market ?? null, isWritable: false },
    vaultA: { value: input.vaultA ?? null, isWritable: true },
    vaultB: { value: input.vaultB ?? null, isWritable: true },
    vaultAAta: { value: input.vaultAAta ?? null, isWritable: true },
    vaultBAta: { value: input.vaultBAta ?? null, isWritable: true },
    tunaPosition: { value: input.tunaPosition ?? null, isWritable: true },
    tunaPositionAtaA: {
      value: input.tunaPositionAtaA ?? null,
      isWritable: true,
    },
    tunaPositionAtaB: {
      value: input.tunaPositionAtaB ?? null,
      isWritable: true,
    },
    tunaPositionOwnerAtaA: {
      value: input.tunaPositionOwnerAtaA ?? null,
      isWritable: true,
    },
    tunaPositionOwnerAtaB: {
      value: input.tunaPositionOwnerAtaB ?? null,
      isWritable: true,
    },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Original args.
  const args = { ...input };

  // Resolve default values.
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value =
      'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' as Address<'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.authority),
      getAccountMeta(accounts.market),
      getAccountMeta(accounts.vaultA),
      getAccountMeta(accounts.vaultB),
      getAccountMeta(accounts.vaultAAta),
      getAccountMeta(accounts.vaultBAta),
      getAccountMeta(accounts.tunaPosition),
      getAccountMeta(accounts.tunaPositionAtaA),
      getAccountMeta(accounts.tunaPositionAtaB),
      getAccountMeta(accounts.tunaPositionOwnerAtaA),
      getAccountMeta(accounts.tunaPositionOwnerAtaB),
      getAccountMeta(accounts.tokenProgram),
    ],
    programAddress,
    data: getRepayDebtInstructionDataEncoder().encode(
      args as RepayDebtInstructionDataArgs
    ),
  } as RepayDebtInstruction<
    TProgramAddress,
    TAccountAuthority,
    TAccountMarket,
    TAccountVaultA,
    TAccountVaultB,
    TAccountVaultAAta,
    TAccountVaultBAta,
    TAccountTunaPosition,
    TAccountTunaPositionAtaA,
    TAccountTunaPositionAtaB,
    TAccountTunaPositionOwnerAtaA,
    TAccountTunaPositionOwnerAtaB,
    TAccountTokenProgram
  >;

  return instruction;
}

export type ParsedRepayDebtInstruction<
  TProgram extends string = typeof TUNA_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /**
     *
     * TUNA accounts
     *
     */

    authority: TAccountMetas[0];
    market: TAccountMetas[1];
    vaultA: TAccountMetas[2];
    vaultB: TAccountMetas[3];
    vaultAAta: TAccountMetas[4];
    vaultBAta: TAccountMetas[5];
    tunaPosition: TAccountMetas[6];
    tunaPositionAtaA: TAccountMetas[7];
    tunaPositionAtaB: TAccountMetas[8];
    tunaPositionOwnerAtaA: TAccountMetas[9];
    tunaPositionOwnerAtaB: TAccountMetas[10];
    /**
     *
     * Other accounts
     *
     */

    tokenProgram: TAccountMetas[11];
  };
  data: RepayDebtInstructionData;
};

export function parseRepayDebtInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedRepayDebtInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 12) {
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
      market: getNextAccount(),
      vaultA: getNextAccount(),
      vaultB: getNextAccount(),
      vaultAAta: getNextAccount(),
      vaultBAta: getNextAccount(),
      tunaPosition: getNextAccount(),
      tunaPositionAtaA: getNextAccount(),
      tunaPositionAtaB: getNextAccount(),
      tunaPositionOwnerAtaA: getNextAccount(),
      tunaPositionOwnerAtaB: getNextAccount(),
      tokenProgram: getNextAccount(),
    },
    data: getRepayDebtInstructionDataDecoder().decode(instruction.data),
  };
}
