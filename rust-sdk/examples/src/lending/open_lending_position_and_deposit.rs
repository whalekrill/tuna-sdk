use anyhow::Result;
use defituna_client::open_lending_position_and_deposit_instructions;
use fusionamm_tx_sender::{send_smart_transaction, SmartTxConfig};
use solana_client::rpc_client::RpcClient;
use solana_sdk::program_pack::Pack;
use solana_sdk::signature::Keypair;
use solana_sdk::signer::Signer;
use spl_token::state::Mint;
use std::ops::Mul;
use std::sync::Arc;

pub async fn open_lending_position_and_deposit(rpc: RpcClient, authority: &Keypair) -> Result<()> {
  // The address of the token mint to deposit/withdraw, identifying the target Tuna Lending Vault.
  // Set to the USDC token address in our examples;
  // There are methods in our sdk to fetch all available lending vaults and their respective mint addresses.
  let token_mint_address = spl_token::native_mint::ID;
  // Token Mint
  let token_mint_account = rpc.get_account(&token_mint_address)?;
  let token_mint = Mint::unpack(&token_mint_account.data)?;

  // The nominal amount to deposit, excluding Token decimals (e.g., 1 SOL as a flat value, or 0.5 SOL).
  let nominal_amount: f64 = 1.0;
  // The amount in lamports to deposit, including Token decimals (e.g. 1_000_000_000 SOL as a flat value for a whole unit of SOL)
  let amount = nominal_amount.mul(10_u64.pow(token_mint.decimals as u32) as f64) as u64;

  // The deposit instruction interacts with the Tuna program to deposit the funds into the Lending Position.
  // If the Lending Position doesn't exist, we need to create it. We rely on the create instruction from the Tuna program.
  let instructions =
    open_lending_position_and_deposit_instructions(&rpc, &authority.pubkey(), &token_mint_address, amount)?;

  // Signing and sending the transaction with all the instructions to the Solana network.
  send_smart_transaction(
    &rpc.get_inner_client(),
    vec![Arc::new(authority.insecure_clone())],
    &authority.pubkey(),
    instructions,
    vec![],
    SmartTxConfig::default(),
  )
  .await?;

  Ok(())
}
