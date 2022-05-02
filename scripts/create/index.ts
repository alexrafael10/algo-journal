import fs from "fs";

import { Logger } from "../../utils/Logger";
import DefaultIndexTemplate from "./code-templates/index";
import DefaultTestIndexTemplate from "./code-templates/index.test";
import DefaultReadmeTemplate from "./code-templates/README.md";

const logger = new Logger("create-script");

const doCleanup = (filepaths: string[]) => {
  try {
    filepaths.forEach((path) => {
      if (path) {
        if (fs.existsSync(path)) {
          fs.unlinkSync(path);
        }
      }
    });
  } catch (error) {
    logger.info(
      "Something went wrong when trying to clean up: " + filepaths.join(", ")
    );
    logger.error(error);
  }
};

const createExercice = (
  folderName: string,
  defaultFunctionName = folderName,
  fileExtension = "ts"
) => {
  const rootPath = "exercices";
  const defaultFileName = "index";
  const filepathsDefaultContentMap = {
    [`${defaultFileName}.${fileExtension}`]: DefaultIndexTemplate,
    [`${defaultFileName}.test.${fileExtension}`]: DefaultTestIndexTemplate,
    [`README.md`]: DefaultReadmeTemplate,
  };

  try {
    logger.info("creating exercice...");

    // create target folder if not already there
    if (!fs.existsSync(`${rootPath}/${folderName}`)) {
      fs.mkdirSync(`${rootPath}/${folderName}`);
    }

    Object.keys(filepathsDefaultContentMap).forEach((filepath) => {
      try {
        const defaultContentFunction = filepathsDefaultContentMap[filepath];
        fs.writeFileSync(
          `${rootPath}/${folderName}/${filepath}`,
          defaultContentFunction(defaultFunctionName),
          {}
        );
        logger.info(`${rootPath}/${folderName}/${filepath}` + " created ✓");
      } catch (error) {
        logger.error(`${rootPath}/${folderName}/${filepath}` + " failed x");
        logger.error(error);
      }
    });

    logger.info("done!");
  } catch (error) {
    logger.error(error);
    logger.error("Something went wrong, cleaning up...");
    doCleanup(
      Object.keys(filepathsDefaultContentMap).map(
        (filepath) => `${rootPath}/${folderName}/${filepath}`
      )
    );
  }
};

if (require.main === module) {
  const [_, __, folderName, defaultFunctionName] = process.argv;
  createExercice(folderName, defaultFunctionName);
}
