module.exports = {
    '**/*.(ts|tsx)': () => 'npx tsc --noEmit',
    '**/*.(ts|tsx|js)': [(filenames) =>
        `next lint --fix --file ${filenames
            .map((file) => file.split(process.cwd())[1])
            .join(" --file ")}`, 'npm run format']
    ,
    '**/*.(md|json)': (filenames) =>
        `npx prettier --write ${filenames.join(' ')}`,
}