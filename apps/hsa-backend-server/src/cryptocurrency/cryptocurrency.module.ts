import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CryptocurrencyModuleBase } from "./base/cryptocurrency.module.base";
import { CryptocurrencyService } from "./cryptocurrency.service";
import { CryptocurrencyController } from "./cryptocurrency.controller";
import { CryptocurrencyResolver } from "./cryptocurrency.resolver";

@Module({
  imports: [CryptocurrencyModuleBase, forwardRef(() => AuthModule)],
  controllers: [CryptocurrencyController],
  providers: [CryptocurrencyService, CryptocurrencyResolver],
  exports: [CryptocurrencyService],
})
export class CryptocurrencyModule {}
