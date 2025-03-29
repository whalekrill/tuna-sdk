//! This code was AUTOGENERATED using the codama library.
//! Please DO NOT EDIT THIS FILE, instead use visitors
//! to add features, then rerun codama to update it.
//!
//! <https://github.com/codama-idl/codama>
//!

use borsh::BorshSerialize;
use borsh::BorshDeserialize;

/// Accounts.
#[derive(Debug)]
pub struct SetMaxPercentageOfLeftovers {
      
              
          pub authority: solana_program::pubkey::Pubkey,
          
              
          pub tuna_config: solana_program::pubkey::Pubkey,
      }

impl SetMaxPercentageOfLeftovers {
  pub fn instruction(&self, args: SetMaxPercentageOfLeftoversInstructionArgs) -> solana_program::instruction::Instruction {
    self.instruction_with_remaining_accounts(args, &[])
  }
  #[allow(clippy::arithmetic_side_effects)]
  #[allow(clippy::vec_init_then_push)]
  pub fn instruction_with_remaining_accounts(&self, args: SetMaxPercentageOfLeftoversInstructionArgs, remaining_accounts: &[solana_program::instruction::AccountMeta]) -> solana_program::instruction::Instruction {
    let mut accounts = Vec::with_capacity(2+ remaining_accounts.len());
                            accounts.push(solana_program::instruction::AccountMeta::new(
            self.authority,
            true
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            self.tuna_config,
            false
          ));
                      accounts.extend_from_slice(remaining_accounts);
    let mut data = borsh::to_vec(&SetMaxPercentageOfLeftoversInstructionData::new()).unwrap();
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
 pub struct SetMaxPercentageOfLeftoversInstructionData {
            discriminator: [u8; 8],
            }

impl SetMaxPercentageOfLeftoversInstructionData {
  pub fn new() -> Self {
    Self {
                        discriminator: [85, 205, 61, 112, 36, 79, 60, 1],
                                }
  }
}

impl Default for SetMaxPercentageOfLeftoversInstructionData {
  fn default() -> Self {
    Self::new()
  }
}

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
 pub struct SetMaxPercentageOfLeftoversInstructionArgs {
                  pub max_percentage_of_leftovers: u32,
      }


/// Instruction builder for `SetMaxPercentageOfLeftovers`.
///
/// ### Accounts:
///
                      ///   0. `[writable, signer]` authority
                ///   1. `[writable]` tuna_config
#[derive(Clone, Debug, Default)]
pub struct SetMaxPercentageOfLeftoversBuilder {
            authority: Option<solana_program::pubkey::Pubkey>,
                tuna_config: Option<solana_program::pubkey::Pubkey>,
                        max_percentage_of_leftovers: Option<u32>,
        __remaining_accounts: Vec<solana_program::instruction::AccountMeta>,
}

impl SetMaxPercentageOfLeftoversBuilder {
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
      pub fn max_percentage_of_leftovers(&mut self, max_percentage_of_leftovers: u32) -> &mut Self {
        self.max_percentage_of_leftovers = Some(max_percentage_of_leftovers);
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
    let accounts = SetMaxPercentageOfLeftovers {
                              authority: self.authority.expect("authority is not set"),
                                        tuna_config: self.tuna_config.expect("tuna_config is not set"),
                      };
          let args = SetMaxPercentageOfLeftoversInstructionArgs {
                                                              max_percentage_of_leftovers: self.max_percentage_of_leftovers.clone().expect("max_percentage_of_leftovers is not set"),
                                    };
    
    accounts.instruction_with_remaining_accounts(args, &self.__remaining_accounts)
  }
}

  /// `set_max_percentage_of_leftovers` CPI accounts.
  pub struct SetMaxPercentageOfLeftoversCpiAccounts<'a, 'b> {
          
                    
              pub authority: &'b solana_program::account_info::AccountInfo<'a>,
                
                    
              pub tuna_config: &'b solana_program::account_info::AccountInfo<'a>,
            }

/// `set_max_percentage_of_leftovers` CPI instruction.
pub struct SetMaxPercentageOfLeftoversCpi<'a, 'b> {
  /// The program to invoke.
  pub __program: &'b solana_program::account_info::AccountInfo<'a>,
      
              
          pub authority: &'b solana_program::account_info::AccountInfo<'a>,
          
              
          pub tuna_config: &'b solana_program::account_info::AccountInfo<'a>,
            /// The arguments for the instruction.
    pub __args: SetMaxPercentageOfLeftoversInstructionArgs,
  }

impl<'a, 'b> SetMaxPercentageOfLeftoversCpi<'a, 'b> {
  pub fn new(
    program: &'b solana_program::account_info::AccountInfo<'a>,
          accounts: SetMaxPercentageOfLeftoversCpiAccounts<'a, 'b>,
              args: SetMaxPercentageOfLeftoversInstructionArgs,
      ) -> Self {
    Self {
      __program: program,
              authority: accounts.authority,
              tuna_config: accounts.tuna_config,
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
  #[allow(clippy::arithmetic_side_effects)]
  #[allow(clippy::clone_on_copy)]
  #[allow(clippy::vec_init_then_push)]
  pub fn invoke_signed_with_remaining_accounts(
    &self,
    signers_seeds: &[&[&[u8]]],
    remaining_accounts: &[(&'b solana_program::account_info::AccountInfo<'a>, bool, bool)]
  ) -> solana_program::entrypoint::ProgramResult {
    let mut accounts = Vec::with_capacity(2+ remaining_accounts.len());
                            accounts.push(solana_program::instruction::AccountMeta::new(
            *self.authority.key,
            true
          ));
                                          accounts.push(solana_program::instruction::AccountMeta::new(
            *self.tuna_config.key,
            false
          ));
                      remaining_accounts.iter().for_each(|remaining_account| {
      accounts.push(solana_program::instruction::AccountMeta {
          pubkey: *remaining_account.0.key,
          is_signer: remaining_account.1,
          is_writable: remaining_account.2,
      })
    });
    let mut data = borsh::to_vec(&SetMaxPercentageOfLeftoversInstructionData::new()).unwrap();
          let mut args = borsh::to_vec(&self.__args).unwrap();
      data.append(&mut args);
    
    let instruction = solana_program::instruction::Instruction {
      program_id: crate::TUNA_ID,
      accounts,
      data,
    };
    let mut account_infos = Vec::with_capacity(3 + remaining_accounts.len());
    account_infos.push(self.__program.clone());
                  account_infos.push(self.authority.clone());
                        account_infos.push(self.tuna_config.clone());
              remaining_accounts.iter().for_each(|remaining_account| account_infos.push(remaining_account.0.clone()));

    if signers_seeds.is_empty() {
      solana_program::program::invoke(&instruction, &account_infos)
    } else {
      solana_program::program::invoke_signed(&instruction, &account_infos, signers_seeds)
    }
  }
}

/// Instruction builder for `SetMaxPercentageOfLeftovers` via CPI.
///
/// ### Accounts:
///
                      ///   0. `[writable, signer]` authority
                ///   1. `[writable]` tuna_config
#[derive(Clone, Debug)]
pub struct SetMaxPercentageOfLeftoversCpiBuilder<'a, 'b> {
  instruction: Box<SetMaxPercentageOfLeftoversCpiBuilderInstruction<'a, 'b>>,
}

impl<'a, 'b> SetMaxPercentageOfLeftoversCpiBuilder<'a, 'b> {
  pub fn new(program: &'b solana_program::account_info::AccountInfo<'a>) -> Self {
    let instruction = Box::new(SetMaxPercentageOfLeftoversCpiBuilderInstruction {
      __program: program,
              authority: None,
              tuna_config: None,
                                            max_percentage_of_leftovers: None,
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
      pub fn max_percentage_of_leftovers(&mut self, max_percentage_of_leftovers: u32) -> &mut Self {
        self.instruction.max_percentage_of_leftovers = Some(max_percentage_of_leftovers);
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
          let args = SetMaxPercentageOfLeftoversInstructionArgs {
                                                              max_percentage_of_leftovers: self.instruction.max_percentage_of_leftovers.clone().expect("max_percentage_of_leftovers is not set"),
                                    };
        let instruction = SetMaxPercentageOfLeftoversCpi {
        __program: self.instruction.__program,
                  
          authority: self.instruction.authority.expect("authority is not set"),
                  
          tuna_config: self.instruction.tuna_config.expect("tuna_config is not set"),
                          __args: args,
            };
    instruction.invoke_signed_with_remaining_accounts(signers_seeds, &self.instruction.__remaining_accounts)
  }
}

#[derive(Clone, Debug)]
struct SetMaxPercentageOfLeftoversCpiBuilderInstruction<'a, 'b> {
  __program: &'b solana_program::account_info::AccountInfo<'a>,
            authority: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                tuna_config: Option<&'b solana_program::account_info::AccountInfo<'a>>,
                        max_percentage_of_leftovers: Option<u32>,
        /// Additional instruction accounts `(AccountInfo, is_writable, is_signer)`.
  __remaining_accounts: Vec<(&'b solana_program::account_info::AccountInfo<'a>, bool, bool)>,
}

