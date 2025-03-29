/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  containsBytes,
  fixEncoderSize,
  getBytesEncoder,
  type Address,
  type ReadonlyUint8Array,
} from '@solana/kit';
import {
  type ParsedAddLiquidityOrcaInstruction,
  type ParsedClosePositionOrcaInstruction,
  type ParsedCollectAndCompoundFeesOrcaInstruction,
  type ParsedCollectFeesOrcaInstruction,
  type ParsedCollectRewardOrcaInstruction,
  type ParsedCreateLendingPositionInstruction,
  type ParsedCreateMarketInstruction,
  type ParsedCreateTunaConfigInstruction,
  type ParsedCreateVaultInstruction,
  type ParsedDepositInstruction,
  type ParsedLiquidatePositionOrcaInstruction,
  type ParsedOpenPositionOrcaInstruction,
  type ParsedRemoveLiquidityOrcaInstruction,
  type ParsedRepayBadDebtInstruction,
  type ParsedRepayDebtInstruction,
  type ParsedSetAdminAuthorityInstruction,
  type ParsedSetFeeRecipientInstruction,
  type ParsedSetLimitOrdersInstruction,
  type ParsedSetLiquidatorAuthorityInstruction,
  type ParsedSetMaxPercentageOfLeftoversInstruction,
  type ParsedSetOwnerAuthorityInstruction,
  type ParsedSetSuspendedStateInstruction,
  type ParsedSetTunaPositionFlagsInstruction,
  type ParsedUpdateMarketInstruction,
  type ParsedUpdateVaultInstruction,
  type ParsedWithdrawInstruction,
} from '../instructions';

export const TUNA_PROGRAM_ADDRESS =
  'tuna4uSQZncNeeiAMKbstuxA9CUkHH6HmC64wgmnogD' as Address<'tuna4uSQZncNeeiAMKbstuxA9CUkHH6HmC64wgmnogD'>;

export enum TunaAccount {
  LendingPosition,
  Market,
  TunaConfig,
  TunaPosition,
  Vault,
}

export function identifyTunaAccount(
  account: { data: ReadonlyUint8Array } | ReadonlyUint8Array
): TunaAccount {
  const data = 'data' in account ? account.data : account;
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([47, 255, 252, 35, 20, 245, 157, 243])
      ),
      0
    )
  ) {
    return TunaAccount.LendingPosition;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([219, 190, 213, 55, 0, 227, 198, 154])
      ),
      0
    )
  ) {
    return TunaAccount.Market;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([124, 149, 24, 7, 195, 168, 153, 58])
      ),
      0
    )
  ) {
    return TunaAccount.TunaConfig;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([76, 197, 161, 51, 232, 15, 137, 220])
      ),
      0
    )
  ) {
    return TunaAccount.TunaPosition;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([211, 8, 232, 43, 2, 152, 117, 119])
      ),
      0
    )
  ) {
    return TunaAccount.Vault;
  }
  throw new Error(
    'The provided account could not be identified as a tuna account.'
  );
}

export enum TunaInstruction {
  AddLiquidityOrca,
  ClosePositionOrca,
  CollectAndCompoundFeesOrca,
  CollectFeesOrca,
  CollectRewardOrca,
  CreateLendingPosition,
  CreateMarket,
  CreateTunaConfig,
  CreateVault,
  Deposit,
  LiquidatePositionOrca,
  OpenPositionOrca,
  RemoveLiquidityOrca,
  RepayBadDebt,
  RepayDebt,
  SetAdminAuthority,
  SetFeeRecipient,
  SetLimitOrders,
  SetLiquidatorAuthority,
  SetMaxPercentageOfLeftovers,
  SetOwnerAuthority,
  SetSuspendedState,
  SetTunaPositionFlags,
  UpdateMarket,
  UpdateVault,
  Withdraw,
}

export function identifyTunaInstruction(
  instruction: { data: ReadonlyUint8Array } | ReadonlyUint8Array
): TunaInstruction {
  const data = 'data' in instruction ? instruction.data : instruction;
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([185, 68, 41, 204, 33, 179, 12, 78])
      ),
      0
    )
  ) {
    return TunaInstruction.AddLiquidityOrca;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([253, 98, 90, 239, 191, 36, 161, 26])
      ),
      0
    )
  ) {
    return TunaInstruction.ClosePositionOrca;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([213, 44, 171, 74, 209, 13, 137, 0])
      ),
      0
    )
  ) {
    return TunaInstruction.CollectAndCompoundFeesOrca;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([147, 188, 191, 37, 255, 10, 239, 76])
      ),
      0
    )
  ) {
    return TunaInstruction.CollectFeesOrca;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([99, 253, 84, 63, 250, 243, 165, 191])
      ),
      0
    )
  ) {
    return TunaInstruction.CollectRewardOrca;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([129, 187, 56, 84, 108, 205, 25, 80])
      ),
      0
    )
  ) {
    return TunaInstruction.CreateLendingPosition;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([103, 226, 97, 235, 200, 188, 251, 254])
      ),
      0
    )
  ) {
    return TunaInstruction.CreateMarket;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([79, 78, 175, 62, 234, 68, 202, 241])
      ),
      0
    )
  ) {
    return TunaInstruction.CreateTunaConfig;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([29, 237, 247, 208, 193, 82, 54, 135])
      ),
      0
    )
  ) {
    return TunaInstruction.CreateVault;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([242, 35, 198, 137, 82, 225, 242, 182])
      ),
      0
    )
  ) {
    return TunaInstruction.Deposit;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([62, 92, 176, 35, 164, 100, 46, 141])
      ),
      0
    )
  ) {
    return TunaInstruction.LiquidatePositionOrca;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([201, 85, 45, 226, 182, 208, 246, 115])
      ),
      0
    )
  ) {
    return TunaInstruction.OpenPositionOrca;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([30, 69, 45, 170, 183, 195, 12, 119])
      ),
      0
    )
  ) {
    return TunaInstruction.RemoveLiquidityOrca;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([112, 144, 188, 157, 43, 106, 141, 34])
      ),
      0
    )
  ) {
    return TunaInstruction.RepayBadDebt;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([79, 200, 30, 15, 252, 22, 162, 8])
      ),
      0
    )
  ) {
    return TunaInstruction.RepayDebt;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([72, 49, 37, 167, 149, 98, 49, 174])
      ),
      0
    )
  ) {
    return TunaInstruction.SetAdminAuthority;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([227, 18, 215, 42, 237, 246, 151, 66])
      ),
      0
    )
  ) {
    return TunaInstruction.SetFeeRecipient;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([65, 128, 90, 161, 171, 133, 122, 255])
      ),
      0
    )
  ) {
    return TunaInstruction.SetLimitOrders;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([246, 146, 22, 66, 159, 216, 172, 143])
      ),
      0
    )
  ) {
    return TunaInstruction.SetLiquidatorAuthority;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([85, 205, 61, 112, 36, 79, 60, 1])
      ),
      0
    )
  ) {
    return TunaInstruction.SetMaxPercentageOfLeftovers;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([128, 171, 210, 21, 103, 179, 80, 117])
      ),
      0
    )
  ) {
    return TunaInstruction.SetOwnerAuthority;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([145, 13, 20, 161, 30, 62, 226, 32])
      ),
      0
    )
  ) {
    return TunaInstruction.SetSuspendedState;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([110, 73, 96, 139, 194, 71, 253, 57])
      ),
      0
    )
  ) {
    return TunaInstruction.SetTunaPositionFlags;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([153, 39, 2, 197, 179, 50, 199, 217])
      ),
      0
    )
  ) {
    return TunaInstruction.UpdateMarket;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([67, 229, 185, 188, 226, 11, 210, 60])
      ),
      0
    )
  ) {
    return TunaInstruction.UpdateVault;
  }
  if (
    containsBytes(
      data,
      fixEncoderSize(getBytesEncoder(), 8).encode(
        new Uint8Array([183, 18, 70, 156, 148, 109, 161, 34])
      ),
      0
    )
  ) {
    return TunaInstruction.Withdraw;
  }
  throw new Error(
    'The provided instruction could not be identified as a tuna instruction.'
  );
}

export type ParsedTunaInstruction<
  TProgram extends string = 'tuna4uSQZncNeeiAMKbstuxA9CUkHH6HmC64wgmnogD',
> =
  | ({
      instructionType: TunaInstruction.AddLiquidityOrca;
    } & ParsedAddLiquidityOrcaInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.ClosePositionOrca;
    } & ParsedClosePositionOrcaInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.CollectAndCompoundFeesOrca;
    } & ParsedCollectAndCompoundFeesOrcaInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.CollectFeesOrca;
    } & ParsedCollectFeesOrcaInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.CollectRewardOrca;
    } & ParsedCollectRewardOrcaInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.CreateLendingPosition;
    } & ParsedCreateLendingPositionInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.CreateMarket;
    } & ParsedCreateMarketInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.CreateTunaConfig;
    } & ParsedCreateTunaConfigInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.CreateVault;
    } & ParsedCreateVaultInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.Deposit;
    } & ParsedDepositInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.LiquidatePositionOrca;
    } & ParsedLiquidatePositionOrcaInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.OpenPositionOrca;
    } & ParsedOpenPositionOrcaInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.RemoveLiquidityOrca;
    } & ParsedRemoveLiquidityOrcaInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.RepayBadDebt;
    } & ParsedRepayBadDebtInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.RepayDebt;
    } & ParsedRepayDebtInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.SetAdminAuthority;
    } & ParsedSetAdminAuthorityInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.SetFeeRecipient;
    } & ParsedSetFeeRecipientInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.SetLimitOrders;
    } & ParsedSetLimitOrdersInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.SetLiquidatorAuthority;
    } & ParsedSetLiquidatorAuthorityInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.SetMaxPercentageOfLeftovers;
    } & ParsedSetMaxPercentageOfLeftoversInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.SetOwnerAuthority;
    } & ParsedSetOwnerAuthorityInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.SetSuspendedState;
    } & ParsedSetSuspendedStateInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.SetTunaPositionFlags;
    } & ParsedSetTunaPositionFlagsInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.UpdateMarket;
    } & ParsedUpdateMarketInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.UpdateVault;
    } & ParsedUpdateVaultInstruction<TProgram>)
  | ({
      instructionType: TunaInstruction.Withdraw;
    } & ParsedWithdrawInstruction<TProgram>);
