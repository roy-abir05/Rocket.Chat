import type { Locator, Page } from '@playwright/test';

import { FlexTab } from './flextab';

export class EditUserFlexTab extends FlexTab {
	constructor(page: Page) {
		super(page.getByRole('dialog'));
	}

	get btnAddUser(): Locator {
		return this.root.locator('role=button[name="Add user"]');
	}

	get btnSaveUser(): Locator {
		return this.root.locator('role=button[name="Save user"]');
	}

	get inputName(): Locator {
		return this.root.getByLabel('Name', { exact: true });
	}

	get inputUserName(): Locator {
		return this.root.getByLabel('Username', { exact: true });
	}

	get inputEmail(): Locator {
		return this.root.getByLabel('Email', { exact: true }).first();
	}

	get inputSetManually(): Locator {
		return this.root.getByLabel('Set manually', { exact: true });
	}

	get inputPassword(): Locator {
		return this.root.getByLabel('Password', { exact: true });
	}

	get inputConfirmPassword(): Locator {
		return this.root.getByLabel('Confirm password', { exact: true });
	}

	get joinDefaultChannels(): Locator {
		return this.root.getByLabel('Join default channels', { exact: true });
	}

	get userRole(): Locator {
		return this.root.locator('button[role="option"]:has-text("user")');
	}

	get setupSmtpLink(): Locator {
		return this.root.getByRole('link', { name: 'Set up SMTP' });
	}

	getCustomField(fieldName: string): Locator {
		return this.root.getByRole('textbox', { name: fieldName });
	}
}
