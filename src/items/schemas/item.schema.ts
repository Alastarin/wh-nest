import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { PolarityEnum } from '../enums/polarity.enum';
import { RarityEnum } from '../enums/rarity.enum';
import { NoiseEnum } from '../enums/noise.enum';

@Schema()
export class Item extends Document {
  @Prop({ required: false, type: String })
  uniqueName: string;
  @Prop({ required: false, type: String })
  name: string;
  @Prop({ required: false, type: String, enum: Object.values(PolarityEnum) })
  polarity?: string;
  @Prop({ required: false, type: String, enum: Object.values(RarityEnum) })
  rarity?: string;
  @Prop({ required: false, type: Number })
  baseDrain?: number;
  @Prop({ required: false, type: Number })
  fusionLimit?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  upgradeEntries?: any[];
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  availableChallenges?: any[];
  @Prop({ required: false, type: Number })
  secondsPerShot?: number;
  @Prop({ required: false, type: [{ type: Number }] })
  damagePerShot?: number[];
  @Prop({ required: false, type: Number })
  magazineSize?: number;
  @Prop({ required: false, type: Number })
  reloadTime?: number;
  @Prop({ required: false, type: Number })
  totalDamage?: number;
  @Prop({ required: false, type: Number })
  damagePerSecond?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  trigger?: any;
  @Prop({ required: false, type: String })
  description?: string;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  hexColours?: any[];
  @Prop({ required: false, type: Number })
  accuracy?: number;
  @Prop({ required: false, type: Number })
  criticalChance?: number;
  @Prop({ required: false, type: Number })
  criticalMultiplier?: number;
  @Prop({ required: false, type: Number })
  procChance?: number;
  @Prop({ required: false, type: Number })
  fireRate?: number;
  @Prop({ required: false, type: Number })
  chargeAttack?: number;
  @Prop({ required: false, type: Number })
  spinAttack?: number;
  @Prop({ required: false, type: Number })
  leapAttack?: number;
  @Prop({ required: false, type: Number })
  wallAttack?: number;
  @Prop({ required: false, type: Number })
  slot?: number;
  @Prop({ required: false, type: String, enum: Object.values(NoiseEnum) })
  noise?: string;
  @Prop({ required: false, type: Boolean })
  sentinel?: boolean;
  @Prop({ required: false, type: Number })
  masteryReq?: number;
  @Prop({ required: false, type: Number })
  omegaAttenuation?: number;
  @Prop({ required: false, type: Number })
  channelingDrain?: number;
  @Prop({ required: false, type: Number })
  channelingDamageMultiplier?: number;
  @Prop({ required: false, type: Number })
  buildPrice?: number;
  @Prop({ required: false, type: Number })
  buildTime?: number;
  @Prop({ required: false, type: Number })
  skipBuildTimePrice?: number;
  @Prop({ required: false, type: Number })
  buildQuantity?: number;
  @Prop({ required: false, type: Boolean })
  consumeOnBuild?: boolean;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  components?: any[];
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  type?: any;
  @Prop({ required: false, type: String })
  imageName: string;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  category: any;
  @Prop({ required: false, type: Boolean })
  tradable: boolean;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  drops?: any[];
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  patchlogs?: any[];
  @Prop({ required: false, type: Number })
  channeling?: number;
  @Prop({ required: false, type: Number })
  ammo?: number;
  @Prop({ required: false, type: [Number, String] })
  damage?: number | string;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  damageTypes?: any;
  @Prop({ required: false, type: [Number, String] })
  marketCost?: number | '';
  @Prop({ required: false, type: [Number, String] })
  flight?: number | '???';
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  polarities?: any[];
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  projectile?: any;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  stancePolarity?: any;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  tags?: any[];
  @Prop({ required: false, type: [Boolean, String] })
  vaulted?: boolean | 'N/A';
  @Prop({ required: false, type: String })
  wikiaThumbnail?: string;
  @Prop({ required: false, type: String })
  wikiaUrl?: string;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  disposition?: any;
  @Prop({ required: false, type: Number })
  health?: number;
  @Prop({ required: false, type: Number })
  shield?: number;
  @Prop({ required: false, type: Number })
  armor?: number;
  @Prop({ required: false, type: Number })
  stamina?: number;
  @Prop({ required: false, type: Number })
  power?: number;
  @Prop({ required: false, type: Number })
  sprintSpeed?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  abilities?: any[];
  @Prop({ required: false, type: Number })
  itemCount?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  parents?: string[];
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  releaseDate?: string;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  vaultDate?: string;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  estimatedVaultDate?: string;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  aura?: any;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  conclave?: boolean;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  color?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  sex?: any;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  sprint?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  passiveDescription?: string;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  areaAttack?: any;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  secondary?: any;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  secondaryArea?: any;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  statusChance?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  binCount?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  binCapacity?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  fillRate?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  durability?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  repairRate?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  capacityMultiplier?: number[];
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  specialities?: string[];
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  showInInventory?: boolean;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  systemIndex?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  systemName?: string;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  nodeType?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  missionIndex?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  factionIndex?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  minEnemyLevel?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  maxEnemyLevel?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  compatName?: string;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  isAugment?: boolean;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  transmutable?: boolean;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  productCategory?: any;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  multishot?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  blockingAngle?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  comboDuration?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  followThrough?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  range?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  slamAttack?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  slamRadialDamage?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  slamRadius?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  slideAttack?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  heavyAttackDamage?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  heavySlamAttack?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  heavySlamRadialDamage?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  heavySlamRadius?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  windUp?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  isUtility?: boolean;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  modSet?: string;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  rewardName?: string;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  tier?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  probability?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  isExilus?: boolean;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  fusionPoints?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  chargeTime?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  exalted?: string[];
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  primeOmegaAttenuation?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  primeSellingPrice?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  maxLevelCap?: number;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  modSetValues?: number[];
  @Prop({ required: false, type: Boolean })
  excludeFromCodex?: boolean;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  levelStats?: any;
  @Prop({ required: false, type: mongoose.Schema.Types.Mixed })
  introduced?: any;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
