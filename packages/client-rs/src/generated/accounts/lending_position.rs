//! This code was AUTOGENERATED using the codama library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun codama to update it.
//!
//! <https://github.com/codama-idl/codama>
//!

use solana_program::pubkey::Pubkey;
use borsh::BorshSerialize;
use borsh::BorshDeserialize;


#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct LendingPosition {
pub discriminator: [u8; 8],
/// Struct version
pub version: u16,
/// Bump seed for the lending position account
pub bump: [u8; 1],
/// Authority address used for managing the position
#[cfg_attr(feature = "serde", serde(with = "serde_with::As::<serde_with::DisplayFromStr>"))]
pub authority: Pubkey,
/// Mint address of the token in the vault
#[cfg_attr(feature = "serde", serde(with = "serde_with::As::<serde_with::DisplayFromStr>"))]
pub pool_mint: Pubkey,
/// The amount of funds provided by user. Used to compute earned amount.
pub deposited_funds: u64,
/// The amount of funds provided by user to the vault as shares
pub deposited_shares: u64,
/// Reserved
#[cfg_attr(feature = "serde", serde(with = "serde_with::As::<serde_with::Bytes>"))]
pub reserved: [u8; 64],
}


impl LendingPosition {
      pub const LEN: usize = 155;
  
  
  
  #[inline(always)]
  pub fn from_bytes(data: &[u8]) -> Result<Self, std::io::Error> {
    let mut data = data;
    Self::deserialize(&mut data)
  }
}

impl<'a> TryFrom<&solana_program::account_info::AccountInfo<'a>> for LendingPosition {
  type Error = std::io::Error;

  fn try_from(account_info: &solana_program::account_info::AccountInfo<'a>) -> Result<Self, Self::Error> {
      let mut data: &[u8] = &(*account_info.data).borrow();
      Self::deserialize(&mut data)
  }
}

#[cfg(feature = "fetch")]
pub fn fetch_lending_position(
  rpc: &solana_client::rpc_client::RpcClient,
  address: &Pubkey,
) -> Result<crate::shared::DecodedAccount<LendingPosition>, std::io::Error> {
  let accounts = fetch_all_lending_position(rpc, &[*address])?;
  Ok(accounts[0].clone())
}

#[cfg(feature = "fetch")]
pub fn fetch_all_lending_position(
  rpc: &solana_client::rpc_client::RpcClient,
  addresses: &[Pubkey],
) -> Result<Vec<crate::shared::DecodedAccount<LendingPosition>>, std::io::Error> {
    let accounts = rpc.get_multiple_accounts(&addresses)
      .map_err(|e| std::io::Error::new(std::io::ErrorKind::Other, e.to_string()))?;
    let mut decoded_accounts: Vec<crate::shared::DecodedAccount<LendingPosition>> = Vec::new();
    for i in 0..addresses.len() {
      let address = addresses[i];
      let account = accounts[i].as_ref()
        .ok_or(std::io::Error::new(std::io::ErrorKind::Other, format!("Account not found: {}", address)))?;
      let data = LendingPosition::from_bytes(&account.data)?;
      decoded_accounts.push(crate::shared::DecodedAccount { address, account: account.clone(), data });
    }
    Ok(decoded_accounts)
}

#[cfg(feature = "fetch")]
pub fn fetch_maybe_lending_position(
  rpc: &solana_client::rpc_client::RpcClient,
  address: &Pubkey,
) -> Result<crate::shared::MaybeAccount<LendingPosition>, std::io::Error> {
    let accounts = fetch_all_maybe_lending_position(rpc, &[*address])?;
    Ok(accounts[0].clone())
}

#[cfg(feature = "fetch")]
pub fn fetch_all_maybe_lending_position(
  rpc: &solana_client::rpc_client::RpcClient,
  addresses: &[Pubkey],
) -> Result<Vec<crate::shared::MaybeAccount<LendingPosition>>, std::io::Error> {
    let accounts = rpc.get_multiple_accounts(&addresses)
      .map_err(|e| std::io::Error::new(std::io::ErrorKind::Other, e.to_string()))?;
    let mut decoded_accounts: Vec<crate::shared::MaybeAccount<LendingPosition>> = Vec::new();
    for i in 0..addresses.len() {
      let address = addresses[i];
      if let Some(account) = accounts[i].as_ref() {
        let data = LendingPosition::from_bytes(&account.data)?;
        decoded_accounts.push(crate::shared::MaybeAccount::Exists(crate::shared::DecodedAccount { address, account: account.clone(), data }));
      } else {
        decoded_accounts.push(crate::shared::MaybeAccount::NotFound(address));
      }
    }
  Ok(decoded_accounts)
}

  #[cfg(feature = "anchor")]
  impl anchor_lang::AccountDeserialize for LendingPosition {
      fn try_deserialize_unchecked(buf: &mut &[u8]) -> anchor_lang::Result<Self> {
        Ok(Self::deserialize(buf)?)
      }
  }

  #[cfg(feature = "anchor")]
  impl anchor_lang::AccountSerialize for LendingPosition {}

  #[cfg(feature = "anchor")]
  impl anchor_lang::Owner for LendingPosition {
      fn owner() -> Pubkey {
        crate::TUNA_ID
      }
  }

  #[cfg(feature = "anchor-idl-build")]
  impl anchor_lang::IdlBuild for LendingPosition {}

  
  #[cfg(feature = "anchor-idl-build")]
  impl anchor_lang::Discriminator for LendingPosition {
    const DISCRIMINATOR: [u8; 8] = [0; 8];
  }

