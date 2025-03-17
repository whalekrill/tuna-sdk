//! This code was AUTOGENERATED using the codama library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun codama to update it.
//!
//! <https://github.com/codama-idl/codama>
//!

use solana_program::pubkey::Pubkey;
use borsh::BorshSerialize;
use borsh::BorshDeserialize;

/// Accounts.
#[derive(Debug)]
pub struct CreateVault {
      
              
          pub authority: solana_program::pubkey::Pubkey,
          
              
          pub tuna_config: solana_program::pubkey::Pubkey,
          
              
          pub vault: solana_program::pubkey::Pubkey,
          
              
          pub vault_ata: solana_program::pubkey::Pubkey,
          
              
          pub token_program: solana_program::pubkey::Pubkey,
          
              
          pub associated_token_program: solana_program::pubkey::Pubkey,
          
              
          pub mint: solana_program::pubkey::Pubkey,
          
              
          pub system_program: solana_program::pubkey::Pubkey,
          
              
          pub rent: solana_program::pubkey::Pubkey,
      }

impl CreateVault {
  pub fn instruction(&self, args: CreateVaultInstructionArgs) -> solana_program::instruction::Instruction {
    self.instruction_with_remaining_accounts(args, &[])
  }
  #[allow(clippy::vec_init_then_push)]
  pub fn instruction_with_remaining_accounts(&self, args: CreateVaultInstructionArgs, remaining_accounts: &[solana_program::instruction::AccountMeta]) -> solana_program::instruction::Instruction {
    let mut accounts = Vec::with_capacity(9+ remaining_accounts.len());
                            accounts.push(solana_program::instruction::AccountMeta::new(
            self.authority,
            true
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.tuna_config,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            self.vault,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            self.vault_ata,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.token_program,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.associated_token_program,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.mint,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.system_program,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            self.rent,
            false
          ));
                      accounts.extend_from_slice(remaining_accounts);
    let mut data = borsh::to_vec(&CreateVaultInstructionData::new()).unwrap();
          let mut args = borsh::to_vec(&args).unwrap();
      data.append(&mut args);
    
    solana_program::instruction::Instruction {
      program_id: crate::TUNA_ID,
      accounts,
      data,
    }
  }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
 pub struct CreateVaultInstructionData {
            discriminator: [u8; 8],
                              }

impl CreateVaultInstructionData {
  pub fn new() -> Self {
    Self {
                        discriminator: [29, 237, 247, 208, 193, 82, 54, 135],
                                                                          }
  }
}

impl Default for CreateVaultInstructionData {
  fn default() -> Self {
    Self::new()
  }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
 pub struct CreateVaultInstructionArgs {
                  pub interest_rate: u64,
                pub supply_limit: u64,
                pub pyth_oracle_price_update: Pubkey,
                pub pyth_oracle_feed_id: Pubkey,
      }


/// Instruction builder for `CreateVault`.
///
/// ### Accounts:
///
                      ///   0. `[writable, signer]` authority
          ///   1. `[]` tuna_config
                ///   2. `[writable]` vault
                ///   3. `[writable]` vault_ata
                ///   4. `[optional]` token_program (default to `TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`)
          ///   5. `[]` associated_token_program
          ///   6. `[]` mint
                ///   7. `[optional]` system_program (default to `11111111111111111111111111111111`)
                ///   8. `[optional]` rent (default to `SysvarRent111111111111111111111111111111111`)
#[derive(Clone, Debug, Default)]
pub struct CreateVaultBuilder {
            authority: Option<solana_program::pubkey::Pubkey>,
                tuna_config: Option<solana_program::pubkey::Pubkey>,
                vault: Option<solana_program::pubkey::Pubkey>,
                vault_ata: Option<solana_program::pubkey::Pubkey>,
                token_program: Option<solana_program::pubkey::Pubkey>,
                associated_token_program: Option<solana_program::pubkey::Pubkey>,
                mint: Option<solana_program::pubkey::Pubkey>,
                system_program: Option<solana_program::pubkey::Pubkey>,
                rent: Option<solana_program::pubkey::Pubkey>,
                        interest_rate: Option<u64>,
                supply_limit: Option<u64>,
                pyth_oracle_price_update: Option<Pubkey>,
                pyth_oracle_feed_id: Option<Pubkey>,
        __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl CreateVaultBuilder {
  pub fn new() -> Self {
    Self::default()
  }
            #[inline(always)]
    pub fn authority(&mut self, authority: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.authority = Some(authority);
                    self
    }
            #[inline(always)]
    pub fn tuna_config(&mut self, tuna_config: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.tuna_config = Some(tuna_config);
                    self
    }
            #[inline(always)]
    pub fn vault(&mut self, vault: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.vault = Some(vault);
                    self
    }
            #[inline(always)]
    pub fn vault_ata(&mut self, vault_ata: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.vault_ata = Some(vault_ata);
                    self
    }
            /// `[optional account, default to 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA']`
#[inline(always)]
    pub fn token_program(&mut self, token_program: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.token_program = Some(token_program);
                    self
    }
            #[inline(always)]
    pub fn associated_token_program(&mut self, associated_token_program: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.associated_token_program = Some(associated_token_program);
                    self
    }
            #[inline(always)]
    pub fn mint(&mut self, mint: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.mint = Some(mint);
                    self
    }
            /// `[optional account, default to '11111111111111111111111111111111']`
#[inline(always)]
    pub fn system_program(&mut self, system_program: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.system_program = Some(system_program);
                    self
    }
            /// `[optional account, default to 'SysvarRent111111111111111111111111111111111']`
#[inline(always)]
    pub fn rent(&mut self, rent: solana_program::pubkey::Pubkey) -> &mut Self {
                        self.rent = Some(rent);
                    self
    }
                    #[inline(always)]
      pub fn interest_rate(&mut self, interest_rate: u64) -> &mut Self {
        self.interest_rate = Some(interest_rate);
        self
      }
                #[inline(always)]
      pub fn supply_limit(&mut self, supply_limit: u64) -> &mut Self {
        self.supply_limit = Some(supply_limit);
        self
      }
                #[inline(always)]
      pub fn pyth_oracle_price_update(&mut self, pyth_oracle_price_update: Pubkey) -> &mut Self {
        self.pyth_oracle_price_update = Some(pyth_oracle_price_update);
        self
      }
                #[inline(always)]
      pub fn pyth_oracle_feed_id(&mut self, pyth_oracle_feed_id: Pubkey) -> &mut Self {
        self.pyth_oracle_feed_id = Some(pyth_oracle_feed_id);
        self
      }
        /// Add an additional account to the instruction.
  #[inline(always)]
  pub fn add_remaining_account(&mut self, account: solana_program::instruction::AccountMeta) -> &mut Self {
    self.__remaining_accounts.push(account);
    self
  }
  /// Add additional accounts to the instruction.
  #[inline(always)]
  pub fn add_remaining_accounts(&mut self, accounts: &[solana_program::instruction::AccountMeta]) -> &mut Self {
    self.__remaining_accounts.extend_from_slice(accounts);
    self
  }
  #[allow(clippy::clone_on_copy)]
  pub fn instruction(&self) -> solana_program::instruction::Instruction {
    let accounts = CreateVault {
                              authority: self.authority.expect("authority is not set"),
                                        tuna_config: self.tuna_config.expect("tuna_config is not set"),
                                        vault: self.vault.expect("vault is not set"),
                                        vault_ata: self.vault_ata.expect("vault_ata is not set"),
                                        token_program: self.token_program.unwrap_or(solana_program::pubkey!("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")),
                                        associated_token_program: self.associated_token_program.expect("associated_token_program is not set"),
                                        mint: self.mint.expect("mint is not set"),
                                        system_program: self.system_program.unwrap_or(solana_program::pubkey!("11111111111111111111111111111111")),
                                        rent: self.rent.unwrap_or(solana_program::pubkey!("SysvarRent111111111111111111111111111111111")),
                      };
          let args = CreateVaultInstructionArgs {
                                                              interest_rate: self.interest_rate.clone().expect("interest_rate is not set"),
                                                                  supply_limit: self.supply_limit.clone().expect("supply_limit is not set"),
                                                                  pyth_oracle_price_update: self.pyth_oracle_price_update.clone().expect("pyth_oracle_price_update is not set"),
                                                                  pyth_oracle_feed_id: self.pyth_oracle_feed_id.clone().expect("pyth_oracle_feed_id is not set"),
                                    };
    
    accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
  }
}

  /// `create_vault` CPI accounts.
  pub struct CreateVaultCpiAccounts<'a, 'b> {
          
                    
              pub authority: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub tuna_config: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub vault: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub vault_ata: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub token_program: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub associated_token_program: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub mint: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub rent: &'b solana_program::account_info::AccountInfo<'a>,
            }

/// `create_vault` CPI instruction.
pub struct CreateVaultCpi<'a, 'b> {
  /// The program to invoke.
  pub __program: &'b solana_program::account_info::AccountInfo<'a>,
      
              
          pub authority: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub tuna_config: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub vault: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub vault_ata: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub token_program: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub associated_token_program: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub mint: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub system_program: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub rent: &'b solana_program::account_info::AccountInfo<'a>,
            /// The arguments for the instruction.
    pub __args: CreateVaultInstructionArgs,
  }

impl<'a, 'b> CreateVaultCpi<'a, 'b> {
  pub fn new(
    program: &'b solana_program::account_info::AccountInfo<'a>,
          accounts: CreateVaultCpiAccounts<'a, 'b>,
              args: CreateVaultInstructionArgs,
      ) -> Self {
    Self {
      __program: program,
              authority: accounts.authority,
              tuna_config: accounts.tuna_config,
              vault: accounts.vault,
              vault_ata: accounts.vault_ata,
              token_program: accounts.token_program,
              associated_token_program: accounts.associated_token_program,
              mint: accounts.mint,
              system_program: accounts.system_program,
              rent: accounts.rent,
                    __args: args,
          }
  }
  #[inline(always)]
  pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
    self.invoke_signed_with_remaining_accounts(&[], &[])
  }
  #[inline(always)]
  pub fn invoke_with_remaining_accounts(&self, remaining_accounts: &[(&'b solana_program::account_info::AccountInfo<'a>, bool, bool)]) -> solana_program::entrypoint::ProgramResult {
    self.invoke_signed_with_remaining_accounts(&[], remaining_accounts)
  }
  #[inline(always)]
  pub fn invoke_signed(&self, signers_seeds: &[&[&[u8]]]) -> solana_program::entrypoint::ProgramResult {
    self.invoke_signed_with_remaining_accounts(signers_seeds, &[])
  }
  #[allow(clippy::clone_on_copy)]
  #[allow(clippy::vec_init_then_push)]
  pub fn invoke_signed_with_remaining_accounts(
    &self,
    signers_seeds: &[&[&[u8]]],
    remaining_accounts: &[(&'b solana_program::account_info::AccountInfo<'a>, bool, bool)]
  ) -> solana_program::entrypoint::ProgramResult {
    let mut accounts = Vec::with_capacity(9+ remaining_accounts.len());
                            accounts.push(solana_program::instruction::AccountMeta::new(
            *self.authority.key,
            true
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.tuna_config.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            *self.vault.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            *self.vault_ata.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.token_program.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.associated_token_program.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.mint.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.system_program.key,
            false
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new_readonly(
            *self.rent.key,
            false
          ));
                      remaining_accounts.iter().for_each(|remaining_account| {
      accounts.push(solana_program::instruction::AccountMeta {
          pubkey: *remaining_account.0.key,
          is_signer: remaining_account.1,
          is_writable: remaining_account.2,
      })
    });
    let mut data = borsh::to_vec(&CreateVaultInstructionData::new()).unwrap();
          let mut args = borsh::to_vec(&self.__args).unwrap();
      data.append(&mut args);
    
    let instruction = solana_program::instruction::Instruction {
      program_id: crate::TUNA_ID,
      accounts,
      data,
    };
    let mut account_infos = Vec::with_capacity(10 + remaining_accounts.len());
    account_infos.push(self.__program.clone());
                  account_infos.push(self.authority.clone());
                        account_infos.push(self.tuna_config.clone());
                        account_infos.push(self.vault.clone());
                        account_infos.push(self.vault_ata.clone());
                        account_infos.push(self.token_program.clone());
                        account_infos.push(self.associated_token_program.clone());
                        account_infos.push(self.mint.clone());
                        account_infos.push(self.system_program.clone());
                        account_infos.push(self.rent.clone());
              remaining_accounts.iter().for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

    if signers_seeds.is_empty() {
      solana_program::program::invoke(&instruction, &account_infos)
    } else {
      solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
    }
  }
}

/// Instruction builder for `CreateVault` via CPI.
///
/// ### Accounts:
///
                      ///   0. `[writable, signer]` authority
          ///   1. `[]` tuna_config
                ///   2. `[writable]` vault
                ///   3. `[writable]` vault_ata
          ///   4. `[]` token_program
          ///   5. `[]` associated_token_program
          ///   6. `[]` mint
          ///   7. `[]` system_program
          ///   8. `[]` rent
#[derive(Clone, Debug)]
pub struct CreateVaultCpiBuilder<'a, 'b> {
  instruction: Box<CreateVaultCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> CreateVaultCpiBuilder<'a, 'b> {
  pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
    let instruction = Box::new(CreateVaultCpiBuilderInstruction {
      __program: program,
              authority: None,
              tuna_config: None,
              vault: None,
              vault_ata: None,
              token_program: None,
              associated_token_program: None,
              mint: None,
              system_program: None,
              rent: None,
                                            interest_rate: None,
                                supply_limit: None,
                                pyth_oracle_price_update: None,
                                pyth_oracle_feed_id: None,
                    __remaining_accounts: Vec::new(),
    });
    Self { instruction }
  }
      #[inline(always)]
    pub fn authority(&mut self, authority: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.authority = Some(authority);
                    self
    }
      #[inline(always)]
    pub fn tuna_config(&mut self, tuna_config: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.tuna_config = Some(tuna_config);
                    self
    }
      #[inline(always)]
    pub fn vault(&mut self, vault: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.vault = Some(vault);
                    self
    }
      #[inline(always)]
    pub fn vault_ata(&mut self, vault_ata: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.vault_ata = Some(vault_ata);
                    self
    }
      #[inline(always)]
    pub fn token_program(&mut self, token_program: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.token_program = Some(token_program);
                    self
    }
      #[inline(always)]
    pub fn associated_token_program(&mut self, associated_token_program: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.associated_token_program = Some(associated_token_program);
                    self
    }
      #[inline(always)]
    pub fn mint(&mut self, mint: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.mint = Some(mint);
                    self
    }
      #[inline(always)]
    pub fn system_program(&mut self, system_program: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.system_program = Some(system_program);
                    self
    }
      #[inline(always)]
    pub fn rent(&mut self, rent: &'b solana_program::account_info::AccountInfo<'a>) -> &mut Self {
                        self.instruction.rent = Some(rent);
                    self
    }
                    #[inline(always)]
      pub fn interest_rate(&mut self, interest_rate: u64) -> &mut Self {
        self.instruction.interest_rate = Some(interest_rate);
        self
      }
                #[inline(always)]
      pub fn supply_limit(&mut self, supply_limit: u64) -> &mut Self {
        self.instruction.supply_limit = Some(supply_limit);
        self
      }
                #[inline(always)]
      pub fn pyth_oracle_price_update(&mut self, pyth_oracle_price_update: Pubkey) -> &mut Self {
        self.instruction.pyth_oracle_price_update = Some(pyth_oracle_price_update);
        self
      }
                #[inline(always)]
      pub fn pyth_oracle_feed_id(&mut self, pyth_oracle_feed_id: Pubkey) -> &mut Self {
        self.instruction.pyth_oracle_feed_id = Some(pyth_oracle_feed_id);
        self
      }
        /// Add an additional account to the instruction.
  #[inline(always)]
  pub fn add_remaining_account(&mut self, account: &'b solana_program::account_info::AccountInfo<'a>, is_writable: bool, is_signer: bool) -> &mut Self {
    self.instruction.__remaining_accounts.push((account, is_writable, is_signer));
    self
  }
  /// Add additional accounts to the instruction.
  ///
  /// Each account is represented by a tuple of the `AccountInfo`, a `bool` indicating whether the account is writable or not,
  /// and a `bool` indicating whether the account is a signer or not.
  #[inline(always)]
  pub fn add_remaining_accounts(&mut self, accounts: &[(&'b solana_program::account_info::AccountInfo<'a>, bool, bool)]) -> &mut Self {
    self.instruction.__remaining_accounts.extend_from_slice(accounts);
    self
  }
  #[inline(always)]
  pub fn invoke(&self) -> solana_program::entrypoint::ProgramResult {
    self.invoke_signed(&[])
  }
  #[allow(clippy::clone_on_copy)]
  #[allow(clippy::vec_init_then_push)]
  pub fn invoke_signed(&self, signers_seeds: &[&[&[u8]]]) -> solana_program::entrypoint::ProgramResult {
          let args = CreateVaultInstructionArgs {
                                                              interest_rate: self.instruction.interest_rate.clone().expect("interest_rate is not set"),
                                                                  supply_limit: self.instruction.supply_limit.clone().expect("supply_limit is not set"),
                                                                  pyth_oracle_price_update: self.instruction.pyth_oracle_price_update.clone().expect("pyth_oracle_price_update is not set"),
                                                                  pyth_oracle_feed_id: self.instruction.pyth_oracle_feed_id.clone().expect("pyth_oracle_feed_id is not set"),
                                    };
        let instruction = CreateVaultCpi {
        __program: self.instruction.__program,
                  
          authority: self.instruction.authority.expect("authority is not set"),
                  
          tuna_config: self.instruction.tuna_config.expect("tuna_config is not set"),
                  
          vault: self.instruction.vault.expect("vault is not set"),
                  
          vault_ata: self.instruction.vault_ata.expect("vault_ata is not set"),
                  
          token_program: self.instruction.token_program.expect("token_program is not set"),
                  
          associated_token_program: self.instruction.associated_token_program.expect("associated_token_program is not set"),
                  
          mint: self.instruction.mint.expect("mint is not set"),
                  
          system_program: self.instruction.system_program.expect("system_program is not set"),
                  
          rent: self.instruction.rent.expect("rent is not set"),
                          __args: args,
            };
    instruction.invoke_signed_with_remaining_accounts(signers_seeds, &self.instruction.__remaining_accounts)
  }
}

#[derive(Clone, Debug)]
struct CreateVaultCpiBuilderInstruction<'a, 'b> {
  __program: &'b solana_program::account_info::AccountInfo<'a>,
            authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                tuna_config: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                vault: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                vault_ata: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                token_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                associated_token_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                mint: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                system_program: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                rent: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                        interest_rate: Option<u64>,
                supply_limit: Option<u64>,
                pyth_oracle_price_update: Option<Pubkey>,
                pyth_oracle_feed_id: Option<Pubkey>,
        /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
  __remaining_accounts: Vec<(&'b solana_program::account_info::AccountInfo<'a>, bool, bool)>,
}

