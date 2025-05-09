import container from '@/src/core/domain/di/container'
import {TripsStoreKey} from "@/src/features/trips/domain/di/keys";
import tripsStore from "@/src/features/trips/data/state/tripsStore";

container.bind(TripsStoreKey).toConstantValue(tripsStore)
