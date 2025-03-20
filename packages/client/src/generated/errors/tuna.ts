/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  isProgramError,
  type Address,
  type SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM,
  type SolanaError,
} from '@solana/kit';
import { TUNA_PROGRAM_ADDRESS } from '../programs';

/** AmountSlippageExceeded: AmountSlippageExceeded */
export const TUNA_ERROR__AMOUNT_SLIPPAGE_EXCEEDED = 0x1770; // 6000
/** BadDebt: BadDebt */
export const TUNA_ERROR__BAD_DEBT = 0x1771; // 6001
/** InvalidRemainingAccountsLength: InvalidRemainingAccountsLength */
export const TUNA_ERROR__INVALID_REMAINING_ACCOUNTS_LENGTH = 0x1772; // 6002
/** InvalidTickArrayAccounts: InvalidAccounts */
export const TUNA_ERROR__INVALID_TICK_ARRAY_ACCOUNTS = 0x1773; // 6003
/** InvalidAccountOwner: InvalidAccountOwner */
export const TUNA_ERROR__INVALID_ACCOUNT_OWNER = 0x1774; // 6004
/** InvalidInstructionArguments: InvalidInstructionArguments */
export const TUNA_ERROR__INVALID_INSTRUCTION_ARGUMENTS = 0x1775; // 6005
/** InvalidSqrtPriceLimitDirection: Provided SqrtPriceLimit not in the same direction as the swap. */
export const TUNA_ERROR__INVALID_SQRT_PRICE_LIMIT_DIRECTION = 0x1776; // 6006
/** InvalidTickArraySequence: InvalidTickArraySequence */
export const TUNA_ERROR__INVALID_TICK_ARRAY_SEQUENCE = 0x1777; // 6007
/** InsufficientLiquidity: InsufficientLiquidity */
export const TUNA_ERROR__INSUFFICIENT_LIQUIDITY = 0x1778; // 6008
/** InterestRateIsOutOfRange: InterestRateIsOutOfRange */
export const TUNA_ERROR__INTEREST_RATE_IS_OUT_OF_RANGE = 0x1779; // 6009
/** LeverageIsOutOfRange: LeverageIsOutOfRange */
export const TUNA_ERROR__LEVERAGE_IS_OUT_OF_RANGE = 0x177a; // 6010
/** LeftoversExceeded: LeftoversExceeded */
export const TUNA_ERROR__LEFTOVERS_EXCEEDED = 0x177b; // 6011
/** LimitOrderExecutionFeeIsOutOfRange: LimitOrderExecutionFeeIsOutOfRange */
export const TUNA_ERROR__LIMIT_ORDER_EXECUTION_FEE_IS_OUT_OF_RANGE = 0x177c; // 6012
/** LiquidationFeeIsOutOfRange: LiquidationFeeIsOutOfRange */
export const TUNA_ERROR__LIQUIDATION_FEE_IS_OUT_OF_RANGE = 0x177d; // 6013
/** LiquidationThresholdIsOutOfRange: LiquidationThresholdIsOutOfRange */
export const TUNA_ERROR__LIQUIDATION_THRESHOLD_IS_OUT_OF_RANGE = 0x177e; // 6014
/** LiquidityZero: Liquidity amount must be greater than zero. */
export const TUNA_ERROR__LIQUIDITY_ZERO = 0x177f; // 6015
/** MarketDisabled: MarketDisabled */
export const TUNA_ERROR__MARKET_DISABLED = 0x1780; // 6016
/** MathOverflow: MathOverflow */
export const TUNA_ERROR__MATH_OVERFLOW = 0x1781; // 6017
/** MathUnderflow: MathUnderflow */
export const TUNA_ERROR__MATH_UNDERFLOW = 0x1782; // 6018
/** OpenInterestLimitExceeded: OpenInterestLimitExceeded */
export const TUNA_ERROR__OPEN_INTEREST_LIMIT_EXCEEDED = 0x1783; // 6019
/** OracleStalePrice: OracleStalePrice */
export const TUNA_ERROR__ORACLE_STALE_PRICE = 0x1784; // 6020
/** OraclePriceDeviationThresholdExceeded: OraclePriceDeviationThresholdExceeded */
export const TUNA_ERROR__ORACLE_PRICE_DEVIATION_THRESHOLD_EXCEEDED = 0x1785; // 6021
/** OraclePriceDeviationThresholdOutOfRange: OraclePriceDeviationThresholdOutOfRange */
export const TUNA_ERROR__ORACLE_PRICE_DEVIATION_THRESHOLD_OUT_OF_RANGE = 0x1786; // 6022
/** PartialFillError: Trade resulted in partial fill */
export const TUNA_ERROR__PARTIAL_FILL_ERROR = 0x1787; // 6023
/** PositionIsHealthy: PositionIsHealthy */
export const TUNA_ERROR__POSITION_IS_HEALTHY = 0x1788; // 6024
/** PositionIsLiquidated: PositionIsLiquidated */
export const TUNA_ERROR__POSITION_IS_LIQUIDATED = 0x1789; // 6025
/** PositionIsUnhealthy: PositionIsUnhealthy */
export const TUNA_ERROR__POSITION_IS_UNHEALTHY = 0x178a; // 6026
/** ProtocolFeeIsOutOfRange: ProtocolFeeIsOutOfRange */
export const TUNA_ERROR__PROTOCOL_FEE_IS_OUT_OF_RANGE = 0x178b; // 6027
/** SolverFailedToFindRoot: SolverFailedToFindRoot */
export const TUNA_ERROR__SOLVER_FAILED_TO_FIND_ROOT = 0x178c; // 6028
/** SqrtPriceOutOfBounds: SqrtPriceOutOfBounds */
export const TUNA_ERROR__SQRT_PRICE_OUT_OF_BOUNDS = 0x178d; // 6029
/** SupplyLimitExceeded: SupplyLimitExceeded */
export const TUNA_ERROR__SUPPLY_LIMIT_EXCEEDED = 0x178e; // 6030
/** Suspended: Suspended */
export const TUNA_ERROR__SUSPENDED = 0x178f; // 6031
/** SwapSlippageExceeded: SwapSlippageExceeded */
export const TUNA_ERROR__SWAP_SLIPPAGE_EXCEEDED = 0x1790; // 6032
/** SwapSlippageIsOutOfRange: SwapSlippageIsOutOfRange */
export const TUNA_ERROR__SWAP_SLIPPAGE_IS_OUT_OF_RANGE = 0x1791; // 6033
/** TickIndexOfBounds: TickIndexOfBounds */
export const TUNA_ERROR__TICK_INDEX_OF_BOUNDS = 0x1792; // 6034
/** TypeCastOverflow: TypeCastOverflow */
export const TUNA_ERROR__TYPE_CAST_OVERFLOW = 0x1793; // 6035
/** UnexpectedValue: UnexpectedValue */
export const TUNA_ERROR__UNEXPECTED_VALUE = 0x1794; // 6036
/** VaultNotInitialized: VaultNotInitialized */
export const TUNA_ERROR__VAULT_NOT_INITIALIZED = 0x1795; // 6037
/** WithdrawRequestExceedsUserBalance: WithdrawRequestExceedsUserBalance */
export const TUNA_ERROR__WITHDRAW_REQUEST_EXCEEDS_USER_BALANCE = 0x1796; // 6038
/** ZeroPriceRange: ZeroPriceRange */
export const TUNA_ERROR__ZERO_PRICE_RANGE = 0x1797; // 6039
/** ZeroTradableAmount: There are no tradable amount to swap. */
export const TUNA_ERROR__ZERO_TRADABLE_AMOUNT = 0x1798; // 6040
/** ZeroYield: ZeroYield */
export const TUNA_ERROR__ZERO_YIELD = 0x1799; // 6041
/** RaydiumInvalidFirstTickArrayAccount: RaydiumInvalidFirstTickArrayAccount */
export const TUNA_ERROR__RAYDIUM_INVALID_FIRST_TICK_ARRAY_ACCOUNT = 0x179a; // 6042
/** RaydiumInvalidTickArray: RaydiumInvalidTickArray */
export const TUNA_ERROR__RAYDIUM_INVALID_TICK_ARRAY = 0x179b; // 6043
/** RaydiumInvaildTickIndex: RaydiumInvaildTickIndex */
export const TUNA_ERROR__RAYDIUM_INVAILD_TICK_INDEX = 0x179c; // 6044
/** RaydiumMaxTokenOverflow: RaydiumMaxTokenOverflow */
export const TUNA_ERROR__RAYDIUM_MAX_TOKEN_OVERFLOW = 0x179d; // 6045
/** RaydiumNotEnoughTickArrayAccount: RaydiumNotEnoughTickArrayAccount */
export const TUNA_ERROR__RAYDIUM_NOT_ENOUGH_TICK_ARRAY_ACCOUNT = 0x179e; // 6046
/** RaydiumSqrtPriceLimitOverflow: RaydiumSqrtPriceLimitOverflow */
export const TUNA_ERROR__RAYDIUM_SQRT_PRICE_LIMIT_OVERFLOW = 0x179f; // 6047
/** RaydiumZeroAmountSpecified: RaydiumZeroAmountSpecified */
export const TUNA_ERROR__RAYDIUM_ZERO_AMOUNT_SPECIFIED = 0x17a0; // 6048
/** UnableToLoadAccountData: UnableToLoadAccountData */
export const TUNA_ERROR__UNABLE_TO_LOAD_ACCOUNT_DATA = 0x17a1; // 6049
/** UnableToDeserializeAccountData: UnableToDeserializeAccountData */
export const TUNA_ERROR__UNABLE_TO_DESERIALIZE_ACCOUNT_DATA = 0x17a2; // 6050

export type TunaError =
  | typeof TUNA_ERROR__AMOUNT_SLIPPAGE_EXCEEDED
  | typeof TUNA_ERROR__BAD_DEBT
  | typeof TUNA_ERROR__INSUFFICIENT_LIQUIDITY
  | typeof TUNA_ERROR__INTEREST_RATE_IS_OUT_OF_RANGE
  | typeof TUNA_ERROR__INVALID_ACCOUNT_OWNER
  | typeof TUNA_ERROR__INVALID_INSTRUCTION_ARGUMENTS
  | typeof TUNA_ERROR__INVALID_REMAINING_ACCOUNTS_LENGTH
  | typeof TUNA_ERROR__INVALID_SQRT_PRICE_LIMIT_DIRECTION
  | typeof TUNA_ERROR__INVALID_TICK_ARRAY_ACCOUNTS
  | typeof TUNA_ERROR__INVALID_TICK_ARRAY_SEQUENCE
  | typeof TUNA_ERROR__LEFTOVERS_EXCEEDED
  | typeof TUNA_ERROR__LEVERAGE_IS_OUT_OF_RANGE
  | typeof TUNA_ERROR__LIMIT_ORDER_EXECUTION_FEE_IS_OUT_OF_RANGE
  | typeof TUNA_ERROR__LIQUIDATION_FEE_IS_OUT_OF_RANGE
  | typeof TUNA_ERROR__LIQUIDATION_THRESHOLD_IS_OUT_OF_RANGE
  | typeof TUNA_ERROR__LIQUIDITY_ZERO
  | typeof TUNA_ERROR__MARKET_DISABLED
  | typeof TUNA_ERROR__MATH_OVERFLOW
  | typeof TUNA_ERROR__MATH_UNDERFLOW
  | typeof TUNA_ERROR__OPEN_INTEREST_LIMIT_EXCEEDED
  | typeof TUNA_ERROR__ORACLE_PRICE_DEVIATION_THRESHOLD_EXCEEDED
  | typeof TUNA_ERROR__ORACLE_PRICE_DEVIATION_THRESHOLD_OUT_OF_RANGE
  | typeof TUNA_ERROR__ORACLE_STALE_PRICE
  | typeof TUNA_ERROR__PARTIAL_FILL_ERROR
  | typeof TUNA_ERROR__POSITION_IS_HEALTHY
  | typeof TUNA_ERROR__POSITION_IS_LIQUIDATED
  | typeof TUNA_ERROR__POSITION_IS_UNHEALTHY
  | typeof TUNA_ERROR__PROTOCOL_FEE_IS_OUT_OF_RANGE
  | typeof TUNA_ERROR__RAYDIUM_INVAILD_TICK_INDEX
  | typeof TUNA_ERROR__RAYDIUM_INVALID_FIRST_TICK_ARRAY_ACCOUNT
  | typeof TUNA_ERROR__RAYDIUM_INVALID_TICK_ARRAY
  | typeof TUNA_ERROR__RAYDIUM_MAX_TOKEN_OVERFLOW
  | typeof TUNA_ERROR__RAYDIUM_NOT_ENOUGH_TICK_ARRAY_ACCOUNT
  | typeof TUNA_ERROR__RAYDIUM_SQRT_PRICE_LIMIT_OVERFLOW
  | typeof TUNA_ERROR__RAYDIUM_ZERO_AMOUNT_SPECIFIED
  | typeof TUNA_ERROR__SOLVER_FAILED_TO_FIND_ROOT
  | typeof TUNA_ERROR__SQRT_PRICE_OUT_OF_BOUNDS
  | typeof TUNA_ERROR__SUPPLY_LIMIT_EXCEEDED
  | typeof TUNA_ERROR__SUSPENDED
  | typeof TUNA_ERROR__SWAP_SLIPPAGE_EXCEEDED
  | typeof TUNA_ERROR__SWAP_SLIPPAGE_IS_OUT_OF_RANGE
  | typeof TUNA_ERROR__TICK_INDEX_OF_BOUNDS
  | typeof TUNA_ERROR__TYPE_CAST_OVERFLOW
  | typeof TUNA_ERROR__UNABLE_TO_DESERIALIZE_ACCOUNT_DATA
  | typeof TUNA_ERROR__UNABLE_TO_LOAD_ACCOUNT_DATA
  | typeof TUNA_ERROR__UNEXPECTED_VALUE
  | typeof TUNA_ERROR__VAULT_NOT_INITIALIZED
  | typeof TUNA_ERROR__WITHDRAW_REQUEST_EXCEEDS_USER_BALANCE
  | typeof TUNA_ERROR__ZERO_PRICE_RANGE
  | typeof TUNA_ERROR__ZERO_TRADABLE_AMOUNT
  | typeof TUNA_ERROR__ZERO_YIELD;

let tunaErrorMessages: Record<TunaError, string> | undefined;
if (process.env.NODE_ENV !== 'production') {
  tunaErrorMessages = {
    [TUNA_ERROR__AMOUNT_SLIPPAGE_EXCEEDED]: `AmountSlippageExceeded`,
    [TUNA_ERROR__BAD_DEBT]: `BadDebt`,
    [TUNA_ERROR__INSUFFICIENT_LIQUIDITY]: `InsufficientLiquidity`,
    [TUNA_ERROR__INTEREST_RATE_IS_OUT_OF_RANGE]: `InterestRateIsOutOfRange`,
    [TUNA_ERROR__INVALID_ACCOUNT_OWNER]: `InvalidAccountOwner`,
    [TUNA_ERROR__INVALID_INSTRUCTION_ARGUMENTS]: `InvalidInstructionArguments`,
    [TUNA_ERROR__INVALID_REMAINING_ACCOUNTS_LENGTH]: `InvalidRemainingAccountsLength`,
    [TUNA_ERROR__INVALID_SQRT_PRICE_LIMIT_DIRECTION]: `Provided SqrtPriceLimit not in the same direction as the swap.`,
    [TUNA_ERROR__INVALID_TICK_ARRAY_ACCOUNTS]: `InvalidAccounts`,
    [TUNA_ERROR__INVALID_TICK_ARRAY_SEQUENCE]: `InvalidTickArraySequence`,
    [TUNA_ERROR__LEFTOVERS_EXCEEDED]: `LeftoversExceeded`,
    [TUNA_ERROR__LEVERAGE_IS_OUT_OF_RANGE]: `LeverageIsOutOfRange`,
    [TUNA_ERROR__LIMIT_ORDER_EXECUTION_FEE_IS_OUT_OF_RANGE]: `LimitOrderExecutionFeeIsOutOfRange`,
    [TUNA_ERROR__LIQUIDATION_FEE_IS_OUT_OF_RANGE]: `LiquidationFeeIsOutOfRange`,
    [TUNA_ERROR__LIQUIDATION_THRESHOLD_IS_OUT_OF_RANGE]: `LiquidationThresholdIsOutOfRange`,
    [TUNA_ERROR__LIQUIDITY_ZERO]: `Liquidity amount must be greater than zero.`,
    [TUNA_ERROR__MARKET_DISABLED]: `MarketDisabled`,
    [TUNA_ERROR__MATH_OVERFLOW]: `MathOverflow`,
    [TUNA_ERROR__MATH_UNDERFLOW]: `MathUnderflow`,
    [TUNA_ERROR__OPEN_INTEREST_LIMIT_EXCEEDED]: `OpenInterestLimitExceeded`,
    [TUNA_ERROR__ORACLE_PRICE_DEVIATION_THRESHOLD_EXCEEDED]: `OraclePriceDeviationThresholdExceeded`,
    [TUNA_ERROR__ORACLE_PRICE_DEVIATION_THRESHOLD_OUT_OF_RANGE]: `OraclePriceDeviationThresholdOutOfRange`,
    [TUNA_ERROR__ORACLE_STALE_PRICE]: `OracleStalePrice`,
    [TUNA_ERROR__PARTIAL_FILL_ERROR]: `Trade resulted in partial fill`,
    [TUNA_ERROR__POSITION_IS_HEALTHY]: `PositionIsHealthy`,
    [TUNA_ERROR__POSITION_IS_LIQUIDATED]: `PositionIsLiquidated`,
    [TUNA_ERROR__POSITION_IS_UNHEALTHY]: `PositionIsUnhealthy`,
    [TUNA_ERROR__PROTOCOL_FEE_IS_OUT_OF_RANGE]: `ProtocolFeeIsOutOfRange`,
    [TUNA_ERROR__RAYDIUM_INVAILD_TICK_INDEX]: `RaydiumInvaildTickIndex`,
    [TUNA_ERROR__RAYDIUM_INVALID_FIRST_TICK_ARRAY_ACCOUNT]: `RaydiumInvalidFirstTickArrayAccount`,
    [TUNA_ERROR__RAYDIUM_INVALID_TICK_ARRAY]: `RaydiumInvalidTickArray`,
    [TUNA_ERROR__RAYDIUM_MAX_TOKEN_OVERFLOW]: `RaydiumMaxTokenOverflow`,
    [TUNA_ERROR__RAYDIUM_NOT_ENOUGH_TICK_ARRAY_ACCOUNT]: `RaydiumNotEnoughTickArrayAccount`,
    [TUNA_ERROR__RAYDIUM_SQRT_PRICE_LIMIT_OVERFLOW]: `RaydiumSqrtPriceLimitOverflow`,
    [TUNA_ERROR__RAYDIUM_ZERO_AMOUNT_SPECIFIED]: `RaydiumZeroAmountSpecified`,
    [TUNA_ERROR__SOLVER_FAILED_TO_FIND_ROOT]: `SolverFailedToFindRoot`,
    [TUNA_ERROR__SQRT_PRICE_OUT_OF_BOUNDS]: `SqrtPriceOutOfBounds`,
    [TUNA_ERROR__SUPPLY_LIMIT_EXCEEDED]: `SupplyLimitExceeded`,
    [TUNA_ERROR__SUSPENDED]: `Suspended`,
    [TUNA_ERROR__SWAP_SLIPPAGE_EXCEEDED]: `SwapSlippageExceeded`,
    [TUNA_ERROR__SWAP_SLIPPAGE_IS_OUT_OF_RANGE]: `SwapSlippageIsOutOfRange`,
    [TUNA_ERROR__TICK_INDEX_OF_BOUNDS]: `TickIndexOfBounds`,
    [TUNA_ERROR__TYPE_CAST_OVERFLOW]: `TypeCastOverflow`,
    [TUNA_ERROR__UNABLE_TO_DESERIALIZE_ACCOUNT_DATA]: `UnableToDeserializeAccountData`,
    [TUNA_ERROR__UNABLE_TO_LOAD_ACCOUNT_DATA]: `UnableToLoadAccountData`,
    [TUNA_ERROR__UNEXPECTED_VALUE]: `UnexpectedValue`,
    [TUNA_ERROR__VAULT_NOT_INITIALIZED]: `VaultNotInitialized`,
    [TUNA_ERROR__WITHDRAW_REQUEST_EXCEEDS_USER_BALANCE]: `WithdrawRequestExceedsUserBalance`,
    [TUNA_ERROR__ZERO_PRICE_RANGE]: `ZeroPriceRange`,
    [TUNA_ERROR__ZERO_TRADABLE_AMOUNT]: `There are no tradable amount to swap.`,
    [TUNA_ERROR__ZERO_YIELD]: `ZeroYield`,
  };
}

export function getTunaErrorMessage(code: TunaError): string {
  if (process.env.NODE_ENV !== 'production') {
    return (tunaErrorMessages as Record<TunaError, string>)[code];
  }

  return 'Error message not available in production bundles.';
}

export function isTunaError<TProgramErrorCode extends TunaError>(
  error: unknown,
  transactionMessage: {
    instructions: Record<number, { programAddress: Address }>;
  },
  code?: TProgramErrorCode
): error is SolanaError<typeof SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM> &
  Readonly<{ context: Readonly<{ code: TProgramErrorCode }> }> {
  return isProgramError<TProgramErrorCode>(
    error,
    transactionMessage,
    TUNA_PROGRAM_ADDRESS,
    code
  );
}
