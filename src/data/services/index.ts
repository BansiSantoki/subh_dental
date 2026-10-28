import { generalDentistry, teethCleaning, rootCanal, pediatricDentistry } from './preventiveCare';
import { cosmeticDentistry, teethWhitening, dentalVeneers, smileMakeover } from './cosmetic';
import { crownsAndBridges, dentalImplants, dentures, clearAligners } from './restorative';
import type { Service, ServiceCategory } from '../../types/content';

/** All treatments, in display order. Add or reorder services here. */
export const services: Service[] = [
generalDentistry,
teethCleaning,
cosmeticDentistry,
teethWhitening,
dentalVeneers,
crownsAndBridges,
rootCanal,
dentalImplants,
clearAligners,
pediatricDentistry,
dentures,
smileMakeover];


export const serviceCategories: {id: ServiceCategory;label: string;description: string;}[] = [
{
  id: 'everyday',
  label: 'Everyday Care',
  description: 'Check-ups, cleaning and gentle treatment for the whole family.'
},
{
  id: 'cosmetic',
  label: 'Cosmetic',
  description: 'Thoughtful options for the colour, shape and balance of your smile.'
},
{
  id: 'restorative',
  label: 'Restorative & Alignment',
  description: 'Rebuilding, replacing and aligning teeth with careful planning.'
}];