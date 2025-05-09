import container from '@/src/core/domain/di/container'
import bindDependencies from "@/src/core/domain/di/bindDependencies";
import {LoadTripsKey, TripsStoreKey} from "@/src/features/trips/domain/di/keys";
import loadTripsFactory from "@/src/features/trips/domain/usecase/loadTripsFactory";

container.bind(LoadTripsKey).toDynamicValue(() => bindDependencies(loadTripsFactory, TripsStoreKey))
